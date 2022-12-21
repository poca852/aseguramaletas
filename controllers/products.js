const { request, response } = require("express");
const { ProductModel } = require('../models')

const addProduct = async(req = request, res = response) => {
  try {
    const product = new ProductModel(req.body);
    await product.save();

    return res.status(201).json({
      ok: true,
      product
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador"
    })
  }
};

const getProducts = async(req = request, res = response) => {
  try {
    return res.status(200).json(await ProductModel.find())
  } catch (error) {
    console.log(error)
    res.status(500).json({
      msg: 'Hable con el administrador'
    })
  };
};

module.exports = {
  addProduct,
  getProducts
}