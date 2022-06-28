const ProductModel = require('../models/productModel');
const validateBody = require('../helpers/validateBody');
const validateId = require('../helpers/validateId');

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
  await validateId(id);

  const product = await ProductModel.getById(id);
  return product;
};

const update = async (id, name, brand) => {
  await validateId(id);
  validateBody(name, brand)

  await ProductModel.update(id, name, brand);
};

const exclude = async (id) => {
  await validateId(id);

  await ProductModel.exclude(id);
};

module.exports = { add, getAll, getById, update, exclude };
