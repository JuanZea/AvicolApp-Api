// Environment Variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const { connection } = require('../database');
require("../database/associations");

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => res.sendFile(path.resolve('./resources/views/index.html')));
app.use('/api', require('../routes/api'));


app.listen(8000, () => {
  console.log('Server on port 8000');

  connection.authenticate().then(() => {
    console.log('Database connection established.');
  });

  // connection.sync({force: true}).then(() => {
  //   console.log('Database connection established.');
  // });
});

