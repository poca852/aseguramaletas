const mongoose = require('mongoose');

const connection = async() => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useUnifiedTopology: true
    })
    await mongoose.set('strictQuery', false)
    console.log('db online')
  } catch (error) {
    console.log(error)
    throw new Error('No se pudo iniciar la db')
  }
}

module.exports = connection;