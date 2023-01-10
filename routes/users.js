const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT, validarCampos } = require('../middlewares');
const { addUser, getAllUser } = require('../controllers/users');

const router = Router();

// crear usuarios
router.post('/', [
  // validarJWT,
  check('email', 'Email requerido').isEmail(),
  check('fullName', 'Nombre requerido').isString(),
  check('password').not().isEmpty(),
  validarCampos
], addUser)

router.get('/all', validarJWT, getAllUser)

module.exports = router;