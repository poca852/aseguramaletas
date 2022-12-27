const { request, response } = require("express");
const { OrderModel, UserModel } = require('../models');
const { ObjectId } = require('mongoose').Types;
const moment = require('moment-timezone');
const generarPdf = require('../helpers/generar-pdf');
const confirmOrder = require("../helpers/send-email");
moment().tz('America/Guatemala').format()

const addOrder = async(req = request, res = response) => {
  try {

    const body = req.body;
    const initial_date = moment().utc('6');
    const finish_date = moment().add(30, 'days').utc('6');

    const order = await OrderModel.create({...body, initial_date, finish_date});
    const secure_url = await generarPdf(order);
    order.pdf = secure_url;
    await order.save();
    // await confirmOrder(body.email, 'Order', order, secure_url);

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
    $or: [{email: regex}, {firstName: regex}, {lastName: regex}],
  })
    .populate({
      path: 'plan',
      select: ['-__v'],
    })

  return res.status(200).json({
    results: orders
  });
};

const activarOrder = async(req = request, res = response) => {
  try {
    const {idOrder} = req.params;

    const order = await OrderModel.findByIdAndUpdate(
      idOrder, 
      {isPending: false}, 
      {new: true}
    );

    await confirmOrder(order);

    res.status(200).json({
      ok: true
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'hable con el administrador | please check logs'
    })
  }
}


module.exports = {
  addOrder,
  searchOrder,
  activarOrder
}