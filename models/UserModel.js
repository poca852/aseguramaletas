const { Schema, model } = require("mongoose");

const UserModel = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },

  fullName: {
    type: String,
    required: true
  },

  img: String,

  password: {
    type: String,
    required: true
  },

  rol: {
    type: String,
    enum: ['admin', 'user', 'super_admin'],
    default: 'user'
  },

  isActive: {
    type: Boolean,
    default: true
  },

});

UserModel.methods.toJSON = function(){
  const {__v, _id, password, ...rest} = this.toObject();
  rest.id = _id;
  return rest;
}

module.exports = model('UserModel', UserModel);