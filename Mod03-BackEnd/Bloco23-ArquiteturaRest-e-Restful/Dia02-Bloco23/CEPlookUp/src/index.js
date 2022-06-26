require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const ErrorHandler = require('./middleware/ErrorHandler');
const cepRouter = require('./routes/cepRouter');

const app = express();

app.use(bodyParser.json());

app.use('/cep', cepRouter);

app.use(ErrorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`)
});