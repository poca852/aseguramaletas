const path = require('path');
const {v4: uuidv4} = require('uuid');

const subirArchivo = (files, extensionesValidas = ['png', 'jpg', 'jpeg', 'gif', 'pdf'], carpeta = '') => {
  return new Promise((resolve, reject) => {
    const { archivo } = files;
    const nombreCortado = archivo.name.split('.');
    const extension = nombreCortado[nombreCortado.length - 1];

    // validar la extencion
    if(!extensionesValidas.includes(extension)){
      return reject(`La extension ${extension} no es permitida`)
    };

    const nombreTemp = uuidv4() + '.' + extension;
    const uploadpath = path.join(__dirname, '../uploads/', carpeta, nombreTemp);

    archivo.mv(uploadpath, (err) => {
      if(err){
        reject(err);
      };

      resolve(nombreTemp);
    });
  });
};

module.exports = {
  subirArchivo
};