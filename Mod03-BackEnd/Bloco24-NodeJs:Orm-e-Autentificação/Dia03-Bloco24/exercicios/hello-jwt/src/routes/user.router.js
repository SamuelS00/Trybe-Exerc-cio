const express = require('express');
const rescue = require('express-rescue');
const userRouter = express.Router();

const validateToken = require('../auth/validateJWT');
const userController = require('../controllers/user.controller');

userRouter.get('/', validateToken, rescue(userController.getAll));

module.exports = userRouter;