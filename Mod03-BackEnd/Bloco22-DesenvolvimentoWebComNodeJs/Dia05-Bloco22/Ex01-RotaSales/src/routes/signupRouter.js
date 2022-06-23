const express = require('express');
const router = express.Router();

const validateSignup = require('../middleware/validateSignup');
const validateToken = require('../middleware/validateToken');


router.post('/', validateSignup, validateToken, (req, res) => {
   const { authorization: { token }} = req.headers;

   res.status(200).json({ "token": token  });
});

module.exports = router; 