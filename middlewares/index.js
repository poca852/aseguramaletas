const validarCampos = require('./validar-campos');
const validarJWT = require('./validar-jwt');
const { esSuperAdmin, tieneRol } = require('./validar-roles');
const validarArchivoSubir = require('./validar-archivo');

module.exports = {
  validarCampos,
  validarJWT,
  esSuperAdmin,
  tieneRol,
  validarArchivoSubir
};