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

    return res.status(201).json({
      ok: true,
      newUser
    })

    
  } catch (error) {
    
  }
};

module.exports = {
  addUser
};