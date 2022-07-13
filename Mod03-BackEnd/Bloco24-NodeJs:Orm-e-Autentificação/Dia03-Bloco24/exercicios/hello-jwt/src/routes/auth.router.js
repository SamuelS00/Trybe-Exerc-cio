const express = require('express');
const rescue = require('express-rescue');
const { validateAdmin } = require('../auth/validateJWT');
const authRouter = express.Router();

const authController = require('../controllers/auth.controller');

authRouter.post('/', rescue(authController.create));

authRouter.get('/top-secret', validateAdmin, (req, res) => {
  return res.status(200).json({ secretInfo: 'Peter Parker é o homem-aranha'})
});

module.exports = authRouter;
