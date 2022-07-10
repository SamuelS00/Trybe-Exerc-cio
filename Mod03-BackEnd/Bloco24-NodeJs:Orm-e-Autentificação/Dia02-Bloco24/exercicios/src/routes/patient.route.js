const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient.controller');

router.get('/', patientController.getAll);

router.post('/', patientController.create);

module.exports = router;