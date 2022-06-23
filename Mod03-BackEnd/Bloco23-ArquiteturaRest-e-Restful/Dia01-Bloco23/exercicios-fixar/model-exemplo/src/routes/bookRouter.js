const express = require('express');
const router = express.Router();

const Books = require('../models/Book');

router.get('/', async(_req, res) => {
    const books = await Books.getAll();

    res.status(200).json(books);
});

router.get('/:id', async(req, res) => {
   const { id } = req.params;
   
   const booksByAuthor = await Books.getByAuthorId(id);

   res.status(200).json(booksByAuthor);
});

module.exports = router;