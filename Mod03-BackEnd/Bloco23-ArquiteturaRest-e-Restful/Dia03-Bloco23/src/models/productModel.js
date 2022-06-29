const connection = require('./connection');

const add = async (name, brand) => {
  const [result] = await connection.query(
    'INSERT INTO rest_exercicios.products (name, brand) VALUES (?, ?);',
    [name, brand],
  );

  const newProduct = { id: result.insertId, name, brand };

  return newProduct;
};

const getAll = async () => {
  const [products] = await connection.query('SELECT * FROM rest_exercicios.products');
  return { products };
};

const getById = async (id) => {
  const [product] = await connection.query(
    'SELECT * FROM rest_exercicios.products WHERE id = ?', [id]
  );

  if (!product.length) return {};

  return { product };
};

const update = async (id, name, brand) => {
  await connection.query(
    'UPDATE rest_exercicios.products SET name = ?, brand = ? WHERE id = ?',
      [name, brand, id],
  );

  const updatedProduct = [{ id, name, brand }];

  return { updatedProduct };
};

const exclude = async (id) => {
  const product = await getById(id);

  if (!product) return {};

  await connection.query(
    'DELETE FROM rest_exercicios.products WHERE id = ?', [id]
  );
};

module.exports = { add, getAll, getById, update, exclude };