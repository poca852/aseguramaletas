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

module.exports = {
  addUser,
  getAllUser
};