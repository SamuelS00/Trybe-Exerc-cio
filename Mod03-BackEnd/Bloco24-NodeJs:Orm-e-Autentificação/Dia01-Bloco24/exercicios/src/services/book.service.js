const {Book} = require('../database/models/index');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

const getByIdBook = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (title, author, pageQuantity) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

module.exports = { getAllBooks, getByIdBook, create };