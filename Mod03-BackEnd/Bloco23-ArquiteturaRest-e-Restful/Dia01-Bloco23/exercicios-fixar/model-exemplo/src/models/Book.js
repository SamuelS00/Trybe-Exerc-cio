const connection = require('./connection');

const getNewBookAndAuthor = ({id, title, firstName, middleName, lastName}) => {
    const author = [firstName, middleName, lastName]
        .filter(Boolean)
        .join(' ');

    return {
    id,
    title,
    author,
    };
};

const serialize = (bookData) => ({
	id: bookData.id,
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

module.exports = {
    getAll
}