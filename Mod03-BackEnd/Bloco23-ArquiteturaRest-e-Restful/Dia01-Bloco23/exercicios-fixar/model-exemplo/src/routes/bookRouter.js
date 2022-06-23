const express = require('express');
const router = express.Router();

const Books = require('../models/Book');

router.get('/search', async(req, res) => {
    const { name } = req.query;

    const books = await Books.getAll();

    const booksFiltered = (
        books.filter((b) => b.author.includes(name) || b.title.includes(name))
    );

    res.status(200).json(booksFiltered);
});

router.get('/', async(req, res) => {
    const books = await Books.getAll();

    res.status(200).json(books);
});

router.get('/:id', async(req, res) => {
   const { id } = req.params;
   
   const booksByAuthor = await Books.getByAuthorId(id);

   res.status(200).json(booksByAuthor);
});

module.exports = router;