// Environment Variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const { connection } = require('../database');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.sendFile(path.resolve('./resources/views/index.html')));
app.use('/api', require('../routes/api'));

app.listen(8000, () => {
  console.log('Server on port 8000');

  connection.sync({force: true}).then(() => {
    console.log('Synchronized models');
  });
});

