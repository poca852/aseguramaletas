const { Router } = require('express');
const { check } = require('express-validator');
const { addUser } = require('../controllers/users');
const { validarJWT, validarCampos } = require('../middlewares');

const router = Router();

// crear usuarios
router.post('/', [
  // validarJWT,
  check('email', 'Email requerido').isEmail(),
  check('fullName', 'Nombre requerido').isString(),
  check('password').not().isEmpty(),
  validarCampos
], addUser)

module.exports = router;