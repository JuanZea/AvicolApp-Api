const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.send('Hello Word');
});

app.listen(8000, () => {
  console.log('Server on port 8000')
});