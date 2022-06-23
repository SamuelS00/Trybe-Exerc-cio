const express = require('express');
const { findById } = require('../models/Author');
const router = express.Router();

const Books = require('../models/Book');
const Author = require('../models/Author');

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

router.post('/', async (req, res) => {
   const { title, author_id } = req.body;

    const authors = await Author.findById(author_id);
    
    if(!authors) {
       return res.status(400).json({ message: 'Dados inválidos'});
    }
    
   await Books.create(title, author_id);

   res.status(201).json({ message: 'Livro criado com sucesso!'})
});

module.exports = router;