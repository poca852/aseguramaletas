const { Router } = require('express');
const {check} = require('express-validator');
const { addOrder, searchOrder, activarOrder, getOrderByPassport, subirVaucher, getAllOrders, mostrarVaucher } = require('../controllers/orders');
const { validarCampos, validarArchivoSubir, validarJWT } = require('../middlewares');

const router = Router();


router.post('/', [
  check('name').isString(),
  check('email').isEmail(),
  check('passport').isString(),
  check('plan', 'No es un id valido').isMongoId(),
  validarCampos
], addOrder);

router.get('/all', validarJWT, getAllOrders)

router.get('/search', getOrderByPassport);

router.get('/:idOrder', mostrarVaucher);

router.get('/search/:termino', searchOrder);

router.post('/addVaucher/:idOrder', [validarArchivoSubir], subirVaucher);

// esto lo hara especificamente el administrador o persona encargada de verificar esto
router.get('/active/:idOrder', validarJWT, activarOrder);

module.exports = router;