const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productsRouter');
const ErrorHandler = require('./middleware/ErrorHandler');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsRouter);

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});