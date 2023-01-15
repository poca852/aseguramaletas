const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT, validarCampos } = require('../middlewares');
const { addUser, getAllUser, editUser } = require('../controllers/users');
const { existeUser } = require('../helpers/db-validators');

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

router.put('/:idUser', [
  validarJWT,
  check('idUser', 'No es un id valido').isMongoId(),
  check('idUser').custom(existeUser),
  validarCampos
], editUser)

module.exports = router;