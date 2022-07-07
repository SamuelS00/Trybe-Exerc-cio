const bookController = require('../services/book.service');

const getAllBooks = async (req, res, _next) => {
  const books = await bookController.getAllBooks();
  
  return res.status(200).json(books);
};

const getByIdBook = async (req, res, _next) => {
  const { id } = req.params;
  const book = await bookController.getByIdBook(id);

  return res.status(200).json(book)
};

const create = async (req, res, _next) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await bookController.create(title, author, pageQuantity);

  return res.status(201).json(newBook);
};

module.exports = { getAllBooks, getByIdBook, create };