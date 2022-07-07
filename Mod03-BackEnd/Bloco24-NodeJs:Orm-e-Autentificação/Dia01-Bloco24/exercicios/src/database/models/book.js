const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.STRING,
  }, 
  {
    underscored: true,
    tableName: 'books'
  });
  
  return Book;
};

module.exports = Book;