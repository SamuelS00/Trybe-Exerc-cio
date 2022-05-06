const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const books = await Book.findAll();
  
    return res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu Errado!!'});
  };
});

module.exports = router;