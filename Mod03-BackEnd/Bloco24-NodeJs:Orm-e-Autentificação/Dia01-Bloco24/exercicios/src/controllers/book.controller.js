const bookController = require('../services/book.service');

const getAllBooks = async (req, res, _next) => {
  const books = await bookController.getAllBooks();
  
  return res.status(200).json(books);
};

module.exports = { getAllBooks };