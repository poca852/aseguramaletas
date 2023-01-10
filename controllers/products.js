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

const getProduct = async(req = request, res = response) => {
  try{
    const {id} = req.params;

    const product = await ProductModel.findById(id);

    return res.status(200).json(product)
  }catch(e){
    console.log(e);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador y revisa los mensajes de consola'
    })
  }
}

module.exports = {
  addProduct,
  getProducts,
  getProduct
}