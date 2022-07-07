const {Book} = require('../database/models/index');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

const getByIdBook = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

module.exports = { getAllBooks, getByIdBook };