const connection = require('../helpers/connection');

const getNewBookAndAuthor = ({book_id, title, firstName, middleName, lastName}) => {
    const author = [firstName, middleName, lastName]
        .filter(Boolean)
        .join(' ');

    return {
    book_id,
    title,
    author,
    };
};

const serialize = (bookData) => ({
	book_id: bookData.id,
    title: bookData.title,
	firstName: bookData.first_name,
	middleName: bookData.middle_name,
	lastName: bookData.last_name});

const getAll = async () => {
    const [books] = await connection.execute(
        `SELECT b.id, b.title, at.first_name, at.middle_name, at.last_name 
        FROM books AS b
        INNER JOIN authors AS at
        ON b.author_id = at.id;`
    );

    return books.map(serialize).map(getNewBookAndAuthor);
};

const getByAuthorId = async (id) => {
    const [booksByAuthor] = await connection.execute(
        `SELECT b.id, b.title, at.first_name, at.middle_name, at.last_name 
        FROM books AS b
        INNER JOIN authors AS at
        ON b.author_id = at.id
        WHERE at.id = ?;`
    , [id]);

    return booksByAuthor.map(serialize).map(getNewBookAndAuthor);
};

const create = async (title, author_id) => {
    const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?,?)'

    connection.execute(query, [title, author_id]);
};

module.exports = {
    getAll,
    getByAuthorId,
    create,
};