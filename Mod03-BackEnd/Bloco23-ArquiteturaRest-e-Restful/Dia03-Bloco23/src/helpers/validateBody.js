const Joi = require('joi');

const invalidData = require('../errors/invalidData');

const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  brand: Joi.string().min(2).required(),
});

const validateBody = (name, brand) => {
  const { error } = productSchema.validate({ name, brand });

  if(error) throw invalidData(error.message);
};

module.exports = validateBody;