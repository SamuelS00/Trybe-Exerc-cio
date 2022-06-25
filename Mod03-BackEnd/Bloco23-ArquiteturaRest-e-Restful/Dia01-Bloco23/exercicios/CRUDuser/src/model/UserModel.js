const connection = require('../helpers/connection');

const getAll = async () => {
   const query = 'SELECT * FROM user_example.users;';

   const [users] = await connection.execute(query);
   
   return users;
}

const findById = async (id) => {
   const query = 'SELECT * FROM user_example.users WHERE id = ?;'

   const [user] = await connection.execute(query, [id]);

   return user;
}

const update = async (id, first_name, last_name, email, password) => {
   const query = (
      `UPDATE user_example.users 
      SET first_name = ?,
      last_name = ?,
      email = ?,
      password = ?
      WHERE id = ?;`
   );

   await connection.execute(query, [first_name, last_name, email, password, id]);
}

const create = async (first_name, last_name, email, password) => {
   const query = ( 
    'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?);'
   );
  
   const [{ insertId }] = await connection.execute(query, [first_name, last_name, email, password]);

   return insertId;
};

module.exports = {
   getAll,
   create,
   findById,
   update,
}