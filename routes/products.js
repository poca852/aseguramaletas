const { Router } = require('express');
const { check } = require('express-validator');

const { addProduct, getProducts } = require('../controllers/products');
const { validarCampos } = require('../middlewares');

const router = Router();

router.post('/', [
  check('title').isString(),
  validarCampos
], addProduct);

router.get('/', getProducts);

module.exports = router;