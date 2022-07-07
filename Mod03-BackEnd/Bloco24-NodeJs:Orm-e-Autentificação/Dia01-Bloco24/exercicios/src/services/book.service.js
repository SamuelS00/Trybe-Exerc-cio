const {Book} = require('../database/models/index');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

module.exports = { getAllBooks };