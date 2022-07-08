const {Book} = require('../database/models/index');

const getAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

const getByIdBook = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ 
      where: { author: author }, 
      order: [['title', 'ASC']]
    });
  return books;
};

const create = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const update = async (id, title, author, pageQuantity, publisher) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id }},
  );

  if(!updatedBook) return { message: 'Book not found'};

  return { message: 'Book updated successfully'}
};

const destroy = async (id) => {
   const deleteBook = await Book.destroy({ where: { id } });

   console.log(deleteBook, 'retorno apagar')

   return { message: 'Book successfully deleted'}
};

module.exports = {
  getAllBooks,
  getByIdBook,
  create,
  update,
  destroy,
  getByAuthor 
};