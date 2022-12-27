const { Router } = require('express');
const {check} = require('express-validator');
const { addOrder, searchOrder, activarOrder } = require('../controllers/orders');
const { validarCampos } = require('../middlewares');

const router = Router();

router.post('/', [
  check('firstName').isString(),
  check('lastName').isString(),
  check('email').isEmail(),
  check('nit').optional({nullable: true}).isString().isLength({max: 9, min: 9}),
  check('address').isString(),
  check('phone').isString().isLength({min: 8}),
  check('country').isString(),
  check('passport').isString(),
  check('flight').isString(),
  check('airline').isString(),
  check('destino').isString(),
  check('plan', 'No es un id valido').isMongoId(),
  validarCampos
], addOrder);

router.get('/search/:termino', searchOrder)

router.get('/active/:idOrder', activarOrder)

module.exports = router;