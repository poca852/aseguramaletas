const coleccionesPermitidas = (coleccion = '', colecciones = []) => {
  const incluida = colecciones.includes(coleccion);

  if(!incluida){
    throw new Error(`La coleccion ${coleccion} no es permitida`)
  };

  return true;
};

module.exports = {
  coleccionesPermitidas
}