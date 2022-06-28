const ProductModel = require('../models/productModel');

const validateId = async (id) => {
  const product = await ProductModel.getById(id);
  if(product === null) return true;

  return false;
};

module.exports = validateId;