const connection = require('../helpers/connection');

const getAll = async () => {
   const query = 'SELECT * FROM user_example.users;';

   const [users] = await connection.execute(query);
   
   return users;
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
}