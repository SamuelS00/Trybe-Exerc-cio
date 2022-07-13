const express = require('express');
const rescue = require('express-rescue');
const userRouter = express.Router();

const userController = require('../controllers/user.controller');

userRouter.get('/', rescue(userController.getAll));

module.exports = userRouter;