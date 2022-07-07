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

module.exports = { getAllBooks, getByIdBook };