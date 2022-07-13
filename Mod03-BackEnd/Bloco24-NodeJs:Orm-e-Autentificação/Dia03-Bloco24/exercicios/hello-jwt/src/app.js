const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const ErrorMiddleware = require('./middleware/errorMiddleware');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(ErrorMiddleware);

module.exports = app;

