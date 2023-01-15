const { request, response } = require('express');
const bcryptjs = require('bcryptjs');
const { UserModel } = require('../models')

const addUser = async(req = request, res = response) => {

  const {password, ...rest} = req.body;

  try {

    const newUser = new UserModel(rest);

    if(password){
      newUser.password = bcryptjs.hashSync(password, 10);
    }

    await newUser.save();

    return res.status(201).json(newUser)

    
  } catch (error) {
    
  }
};

const getAllUser = async(req = request, res = response) => {
  try {
    const users = await UserModel.find();

    return res.status(200).json(users)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "hable con el administrador"
    })
  }
}

const editUser = async(req = request, res = response) => {
  try {
    const { idUser } = req.params;
    const { password, ...resto} = req.body;
    const user = req.user;

    if(user.rol !== 'admin' && user.rol !== 'super_admin'){
      return res.status(401).json({
        ok: false,
        msg: 'No tiene permiso de hacer esto'
      })
    }

    if(password){
      resto.password = bcryptjs.hashSync(password, 10);
    }

    await UserModel.findByIdAndUpdate(idUser, resto);

    return res.status(200).json(true)

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador y revise los logs'
    })
  }
}

module.exports = {
  addUser,
  getAllUser,
  editUser
};