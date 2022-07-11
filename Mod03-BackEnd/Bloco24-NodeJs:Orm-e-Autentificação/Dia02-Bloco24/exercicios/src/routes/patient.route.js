const express = require('express');
const patientRouter = express.Router();

const patientController = require('../controller/patient.controller');

patientRouter.get('/', patientController.getAll);

patientRouter.post('/', patientController.create);

module.exports = patientRouter;