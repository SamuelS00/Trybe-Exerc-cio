const ProductModel = require('../models/productModel');
const validateBody = require('../helpers/validateBody');
const validateId = require('../helpers/validateId');

const invalidData = require('../errors/invalidData');
const INVALID_PRODUCT_ID = (id) => `there is no product with id ${id}`

const add = async (name, brand) => {
  const { error } = validateBody(name, brand);

  if(error) throw invalidData(error.message);

  const newProduct = await ProductModel.add(name, brand);
  return newProduct;
};

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
};

const getById = async (id) => {
  const isValidId = await validateId(id);

  if(isValidId) throw invalidData(INVALID_PRODUCT_ID(id));
  
  const product = await ProductModel.getById(id);
  return product;
};

const update = async (id, name, brand) => {
  const isValidId = await validateId(id);
  const { error } = validateBody(name, brand)

  if(isValidId) throw invalidData(INVALID_PRODUCT_ID(id));
  if(error) throw invalidData(error.message);

  const updatedProduct = await ProductModel.update(id, name, brand);
  return updatedProduct;
};

const exclude = async (id) => {
  const isValidId = await validateId(id);

  if(isValidId) throw invalidData(INVALID_PRODUCT_ID(id));

  await ProductModel.exclude(id);
};

module.exports = { add, getAll, getById, update, exclude };
