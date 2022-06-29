const ProductModel = require('../models/productModel');

const validateId = async (id) => {
  const { products } = await ProductModel.getAll();
  const productById = products.find((p) => p.id === Number(id))

  if(!productById) return true;

  return false;
};

module.exports = validateId;