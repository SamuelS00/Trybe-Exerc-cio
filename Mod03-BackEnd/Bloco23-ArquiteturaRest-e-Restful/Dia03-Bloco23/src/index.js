const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productsRouter');
const ErrorHandler = require('./middleware/ErrorHandler');
// Doc 
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json')

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productsRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(ErrorHandler);

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});