const ProductModel = require('../models/productModel');
const validateBody = require('../helpers/validateBody');

const add = async (name, brand) => {
  validateBody(name, brand);

  const newProduct = await ProductModel.add(name, brand);
  return newProduct;
};

const getAll = async () => {
  const products = await ProductModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await ProductModel.getById(id);

  return product;
};

const update = async (id, name, brand) => {
  await ProductModel.update(id, name, brand);
};

const exclude = async (id) => {
  await ProductModel.exclude(id);
};

module.exports = { add, getAll, getById, update, exclude };
