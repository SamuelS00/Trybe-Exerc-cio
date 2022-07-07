const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const booksRouter = require('./routes/books.router');
const ErrorMiddleware = require('./middleware/ErrorMiddleware');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/books', booksRouter)

app.use(ErrorMiddleware);

module.exports = app;

// dúvida: Mudar o tipo da minha coluna pageQuantity para INTEGER.