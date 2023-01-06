const { Router } = require('express');
const { check } = require('express-validator');
const {validarCampos, validarJWT} = require('../middlewares')
const { login, revalidar } = require('../controllers/auth');

const router = Router();

router.post('/login', [
  check('email').isEmail(),
  check('password').not().isEmpty(),
  validarCampos
], login);

router.get('/renew', validarJWT, revalidar);

module.exports = router;