const esSuperAdmin = async(req, res, next) => {
  if(!req.user){
    return res.status(500).json({
      msg: 'La peticion no tiene token'
    });
  };

  const { rol, fullName } = req.user;
  if( rol !== 'super_admin' ){
    return res.status(401).json({
      msg: `${fullName} no es super Admin - no puede hacer eso`
    });
  };

  next();
};

const tieneRol = async(req, res, next) => {
  if(!req.user){
    return res.status(500).json({
      msg: 'La peticion no tiene token'
    });
  };

  const {rol, fullName} = req.user;

  if( !['super_admin', 'admin'].includes(rol) ){
    return res.status(401).json({
      msg: `${fullName} No tiene permiso para hacer esto`
    });
  };

  next();
};

module.exports = {
  esSuperAdmin,
  tieneRol
}