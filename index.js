//Import .env configurations
if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const { sequelize } = require('./database/db');

// Routes
app.get('/', (req, res) => {
  res.send('Hello Word');
});

app.listen(8000, () => {
  console.log('Server on port 8000')

  // Connect with database
  try {
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});