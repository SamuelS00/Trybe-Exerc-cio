const express = require('express');
const router = express.Router();

const ENDPOINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
const axios = require('axios');

const { isValidUsername, isValidEmail, isValidPassword, isValidToken} = require('../middlewares/validations');

router.get().get('/btc', isValidToken, async (_req, res) => {
  const result = await axios.get(ENDPOINT);
  
  res.status(200).json(result.data)}
);
  
router.post('/register', isValidUsername, isValidEmail, isValidPassword,
  (_req, res) => res.status(201).json({ message: 'user created' })
);
  
router.post('/login', isValidEmail, isValidPassword,
  (_req, res) => res.status(200).json({ token: '86567349784e' })
);

module.exports = router;