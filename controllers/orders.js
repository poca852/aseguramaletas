const fs = require('fs');
const { request, response } = require("express");
const { OrderModel, UserModel } = require('../models');
const { ObjectId } = require('mongoose').Types;
const moment = require('moment-timezone');
const generarPdf = require('../helpers/generar-pdf');
moment().tz('America/Guatemala').format()

const coleccionesPermitidas = [
  'users',
  'orders',
];

const addOrder = async(req = request, res = response) => {
  try {

    const body = req.body;
    const initial_date = moment().utc('6');
    const finish_date = moment().add(30, 'days').utc('6');

    const order = new OrderModel({...body, initial_date, finish_date});

    
    await order.save();
    generarPdf(order.toJSON());

    return res.status(201).json({
      ok: true,
      order
    })
  } catch (error) {
    console.log(error)
  }
};

const searchOrder = async(termino = '', res = response) => {
  const isMongoId = ObjectId.isValid(termino);
  if(isMongoId){
    const order = await OrderModel.findById(termino)
      .populate('plan', ['-__v'])
    return res.status(200).json({
      results: (order)? [order]: []
    })
  };

  const regex = new RegExp(termino, 'i');
  const orders = await UserModel.find({
    $or: [{email: regex}, {fullName: regex}],
    $and: [{isActive: true}]
  })
    .populate({
      path: 'orders',
      select: ['-__v', '-cliente'],
      populate: {
        path: 'products',
        select: ['-__v']
      }
    })

  return res.status(200).json({
    results: orders
  });
};

const buscar = (req, res = response) => {
  const {coleccion, termino = ''} = req.params;
  if(!coleccionesPermitidas.includes(coleccion)){
    return res.status(400).json({
      msg: 'La coleccion no es permitida'
    });
  };

  switch (coleccion) {
    case 'orders':
      searchOrder(termino, res)
      break;
  
    default:
      res.status(401).json({
        msg: 'Coleccion no encontrada'
      })
  }
};

module.exports = {
  addOrder,
  buscar
}