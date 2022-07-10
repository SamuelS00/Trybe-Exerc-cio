const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const patientRouter = require('./routes/patient.route');
const ErrorMiddleware = require('./middleware/ErrorMiddleware');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/patients', patientRouter)

app.use(ErrorMiddleware);

module.exports = app;