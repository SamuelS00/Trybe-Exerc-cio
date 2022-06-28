const invalidData = require('../errors/invalidData');
const ProductModel = require('../models/productModel');

const validateId = async (id) => {
  const product = await ProductModel.getById(id);

  if(product === null) throw invalidData(`there is no product with id ${id}`);
};

module.exports = validateId;