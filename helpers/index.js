const { generarJWT } = require('./generar-jwt');
const { coleccionesPermitidas } = require('./db-validators');
const confirmOrder = require('./send-email');
const generarPdf = require('./generar-pdf');
const { subirArchivo } = require('./subir-archivo');

module.exports = {
  generarJWT,
  coleccionesPermitidas,
  confirmOrder,
  generarPdf,
  subirArchivo
}