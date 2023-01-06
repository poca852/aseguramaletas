const mongoose = require('mongoose');

const connection = async() => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true
    })
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo iniciar la db')
  }
}

module.exports = connection;