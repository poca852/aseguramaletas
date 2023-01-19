const express = require('express');
const cors = require('cors');
const connection = require('../db/config');
const fileUpload = require('express-fileupload');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      auth: '/api/auth',
      users: '/api/users',
      orders: '/api/orders',
      products: '/api/products',
      uploads: '/api/uploads'
    }

    this.conectarDB();

    this.middlewares();

    this.routes();
  }

  async conectarDB() {
    try {

      await connection();

    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static('public'));

    this.app.use(fileUpload({
      useTempFiles: true,
      tempFileDir: '/tmp/',
      createParentPath: true
    }));
  }

  routes() {
    this.app.use(this.paths.users, require('../routes/users'))
    this.app.use(this.paths.auth, require('../routes/auth'));
    this.app.use(this.paths.orders, require('../routes/orders'))
    this.app.use(this.paths.products, require('../routes/products'))
    this.app.use(this.paths.uploads, require('../routes/uploads'))
  }

  listen() {
    this.app.listen(this.port, () => {})
  }
}

module.exports = Server;