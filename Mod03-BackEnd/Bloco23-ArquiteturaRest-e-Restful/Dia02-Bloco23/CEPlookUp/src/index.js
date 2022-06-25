const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cepRouter = require('./routes/cepRouter');
const ErrorHandler = require('./middleware/ErrorHandler');
app.use('/cep', cepRouter);

app.use(ErrorHandler);

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`)
});