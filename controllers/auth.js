const { request, response } = require("express");
const { UserModel } = require('../models');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers');

const login = async (req = request, res = response) => {
  try {

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        ok: false,
        msg: `El usuario con el email ${email} no existe`
      });
    };

    if (!bcryptjs.compareSync(password, user.password)) {
      return res.status(401).json({
        ok: false,
        msg: 'Verifique sus datos'
      })
    }

    const token = await generarJWT(user.id);

    return res.status(200).json({
      ok: true,
      user,
      token
    })

  } catch (error) {

  };
};

const revalidar = async (req = request, res = response) => {
  try {
    const { user } = req;

    const token = await generarJWT(user._id);

    return res.status(200).json({
      ok: true,
      user,
      token
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador y revise los console.log'
    })
  }
}

module.exports = {
  login,
  revalidar
}