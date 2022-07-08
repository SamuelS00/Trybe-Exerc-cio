const express = require('express');
const router = express.Router();
const booksController = require('../controllers/book.controller');

router.get('/search', booksController.getByAuthor);

router.get('/', booksController.getAllBooks);

router.get('/:id', booksController.getByIdBook);

router.post('/', booksController.create);

router.put('/:id', booksController.update);

router.delete('/:id', booksController.destroy);

module.exports = router;