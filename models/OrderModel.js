const {Schema, model} = require('mongoose');

const OrderModel = new Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },

  nit: {
    type: String,
    default: 'C/F'
  },

  passport: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  
  initial_date: {
    type: Date,
    required: true
  },

  finish_date: {
    type: Date,
    required: true
  },

  plan: {
    type: Schema.Types.ObjectId,
    ref: 'ProductModel'
  },

  ticket: String,

  pdf: String,

  vaucher: String,

  isPending: {
    type: Boolean,
    default: true
  },

});

OrderModel.methods.toJSON = function(){
  const {__v, ...rest} = this.toObject();
  return rest;
};

module.exports = model('OrderModel', OrderModel);