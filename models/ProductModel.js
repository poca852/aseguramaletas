const { Schema, model } = require('mongoose');

const ProductModel = new Schema({

  title: {
    type: String,
    required: true
  },
  description: String,
  benefits: [String],
  price: Number,
  img: String,

});

ProductModel.methods.toJSON = function(){
  const {__v, ...rest} = this.toObject();
  return rest;
};

module.exports = model('ProductModel', ProductModel);