const {Router} = require('express');
const {check} = require('express-validator');
const { actualizarImagen } = require('../controllers/uploads');
const { coleccionesPermitidas } = require('../helpers');
const { validarCampos } = require('../middlewares');

const router = Router();

router.put('/:coleccion/:id', [
  check('id', 'Debe ser un mongo id valido').isMongoId(),
  check('coleccion').custom(c => coleccionesPermitidas(c, ['users', 'products', 'orders'])),
  validarCampos
], actualizarImagen)

module.exports = router;