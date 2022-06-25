const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();
const bodyParser = require('body-parser');

const cepRouter = require('./models/cepRouter');
app.use('/cep', cepRouter);

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`)
});