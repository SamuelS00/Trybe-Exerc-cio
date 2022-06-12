const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // 1
app.use(bodyParser.json());

const salesRouter = require('./routes/salesRouter');
app.use('/sales', salesRouter); // 2

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

