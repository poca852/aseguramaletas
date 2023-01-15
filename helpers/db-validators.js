const {UserModel} = require('../models')

const coleccionesPermitidas = (coleccion = '', colecciones = []) => {
  const incluida = colecciones.includes(coleccion);

  if(!incluida){
    throw new Error(`La coleccion ${coleccion} no es permitida`)
  };

  return true;
};

const existeUser = async(user = '') => {
  const validation = await UserModel.findById(user);
  if(!validation){
    throw new Error('No existe este usuario')
  }
}

module.exports = {
  coleccionesPermitidas,
  existeUser
}