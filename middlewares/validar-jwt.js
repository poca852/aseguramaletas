const jwt = require('jsonwebtoken');
const { UserModel } = require('../models');

const validarJWT = async(req, res, next) => {
  const token = req.header('x-token');
  if(!token){
    return res.status(401).json({
      msg: 'No hay token en la peticion'
    });
  };

  try {
    const {uid} = jwt.verify(token, process.env.JSONWEBTOKEN);
    const user = await UserModel.findById(uid);

    if(!user){
      return res.status(401).json({
        msg: 'Token no valido, User no existe en la db'
      });
    };

    if(!user.isActive){
      return res.status(401).json({
        ok: false,
        msg: 'Acceso denegado'
      });
    };

    req.user = user;
    next();
  } catch (error) {
    console.log(error);

    res.status(401).json({
      ok: false,
      msg: 'Token no valido'
    });
  };
};

module.exports = validarJWT;