// Environment Variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const { connection } = require('./database');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello Word');
});

app.listen(8000, () => {
  console.log('Server on port 8000');

  connection.sync().then(() => {
    console.log('Tablas sincronizadas')
  });
});

console.log(process.env.DB_USERNAME)