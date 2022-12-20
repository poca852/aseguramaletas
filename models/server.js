const express = require('express');
const cors = require('cors');
const connection = require('../db/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      users: '/api/users'
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
    this.app.use(express.static('public'))
  }

  routes(){
    this.app.use(this.paths.users, require('../routes/users'))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('server online')
    })
  }
}

module.exports = Server;