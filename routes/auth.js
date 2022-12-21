const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const {validarCampos} = require('../middlewares')

const router = Router();

router.post('/login', [
  check('email').isEmail(),
  check('password').not().isEmpty(),
  validarCampos
], login);

module.exports = router;