const path = require('path');
const { request, response } = require("express");
const { OrderModel } = require('../models');
const { ObjectId } = require('mongoose').Types;
const moment = require('moment-timezone');
const { generarPdf, confirmOrder, subirArchivo } = require('../helpers');
moment().tz('America/Guatemala').format()

const addOrder = async(req = request, res = response) => {
  try {

    const body = req.body;
    const initial_date = moment().utc('6');
    const finish_date = moment().add(30, 'days').utc('6');
    const date = moment().utc(true);

    const order = await OrderModel.create({...body, initial_date, finish_date, date});
    const secure_url = await generarPdf(order);
    order.pdf = secure_url;
    await order.save();

    await confirmOrder(order);

    return res.status(201).json({
      ok: true,
      order
    })
  } catch (error) {
    console.log(error)
  }
};

const searchOrder = async(req = request, res = response) => {

  const {termino} = req.params;
  const isMongoId = ObjectId.isValid(termino);

  if(isMongoId){
    const order = await OrderModel.findById(termino)
      .populate('plan', ['-__v'])
    return res.status(200).json({
      results: (order)? [order]: []
    })
  };

  const regex = new RegExp(termino, 'i');
  const orders = await OrderModel.find({
    $or: [{email: regex}, {name: regex}],
  })
    .populate({
      path: 'plan',
      select: ['-__v'],
    })

  return res.status(200).json({
    results: orders
  });
};

const getOrderByPassport = async(req = request, res = response) => {
  try{
    const { passport } = req.query;

    const orden = await OrderModel.findOne({
      passport: passport.toUpperCase()
    });

    if(!orden){
      return res.status(404).json({
        ok: false,
        msg: `No existe una orden con el pasaporte ${passport}`
      });
    };

    return res.status(200).json({
      ok: true,
      order: orden
    })
  }catch(e){
    console.log(e);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const activarOrder = async(req = request, res = response) => {
  try {
    const {idOrder} = req.params;


    const order = await OrderModel.findByIdAndUpdate(
      idOrder, 
      {isPending: false}, 
      {new: true}
    );

    await confirmOrder(order);

    return res.status(200).json(true)

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'hable con el administrador | please check logs'
    })
  }
}

const subirVaucher = async(req = request, res = response) => {
  try {
    const {idOrder} = req.params;
    const file = await subirArchivo(req.files, undefined, 'vaucher');

    const orderUpdated = await OrderModel.findByIdAndUpdate(idOrder, {
      vaucher: file
    }, {new: true});

    res.status(200).json({
      ok: true,
      order: orderUpdated
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: error
    })
  }
}

const getAllOrders = async(req = request, res = response) => {
  try {

    let { isPending = true } = req.query;
    isPending = JSON.parse(isPending.toLowerCase());

    const orders = await OrderModel.find({
      isPending
    })
      .populate('plan', ['-__v']);

    return res.status(200).json(orders)
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador y revice los console.log'
    })
  }
}

const mostrarVaucher = async(req = request, res = response) => {
  try {
    const {idOrder} = req.params;
    const orden = await OrderModel.findById(idOrder);
    const pathImg = path.join(__dirname, '../uploads/vaucher', orden.vaucher)

    res.sendFile(pathImg);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador revise los logs'
    })
  }
}


module.exports = {
  addOrder,
  searchOrder,
  activarOrder,
  getOrderByPassport,
  subirVaucher,
  getAllOrders,
  mostrarVaucher
}