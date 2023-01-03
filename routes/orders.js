const { Router } = require('express');
const {check} = require('express-validator');
const { addOrder, searchOrder, activarOrder, getOrderByPassport, subirVaucher } = require('../controllers/orders');
const { validarCampos, validarArchivoSubir } = require('../middlewares');

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

router.get('/search', getOrderByPassport);

router.get('/search/:termino', searchOrder);

router.post('/addVaucher/:idOrder', [validarArchivoSubir], subirVaucher);

// esto lo hara especificamente el administrador o persona encargada de verificar esto
router.get('/active/:idOrder', activarOrder);

module.exports = router;