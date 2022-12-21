const { generarJWT } = require('./generar-jwt');
const { coleccionesPermitidas } = require('./db-validators');

module.exports = {
  generarJWT,
  coleccionesPermitidas
}