const express = require('express');
const surgerieRouter = express.Router();

const surgerieController = require('../controller/surgerie.controller');

surgerieRouter.get('/', surgerieController.getAll);

module.exports = surgerieRouter;