const { request, response } = require('express');
const cloudinary = require('cloudinary').v2;
cloudinary.config(process.env.CLOUDINARY_URL);

const { OrderModel, UserModel, ProductModel } = require('../models');

const actualizarImagen = async (req = request, res = response) => {
  const { id, coleccion } = req.params;

  let modelo;

  switch (coleccion) {
    case 'users':
      modelo = await UserModel.findById(id);
      if (!modelo) {
        return res.status(404).json({
          msg: `No existe un usuario con el id ${id}`
        });
      };
      break;

    case 'products':
      modelo = await ProductModel.findById(id);
      if (!modelo) {
        return res.status(404).json({
          msg: `No existe un producto con el id ${id}`
        });
      };
      break;

    case 'orders':
      modelo = await OrderModel.findById(id);
      if (!modelo) {
        return res.status(404).json({
          msg: `No existe un pedido con el id ${id}`
        });
      };
      break;


    default:
      return res.status(500).json({
        msg: 'Hable con el administrador'
      });
  };

  // Limpiar imágenes previas
  if (modelo.img) {
    const nombreArr = modelo.img.split('/');
    const nombre = nombreArr[nombreArr.length - 1];
    const [public_id] = nombre.split('.');
    cloudinary.uploader.destroy(public_id);
  }

  const { tempFilePath } = req.files.archivo
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
  modelo.img = secure_url;

  await modelo.save();


  res.json(modelo);


};

module.exports = {
  actualizarImagen
}