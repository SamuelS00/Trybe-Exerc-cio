const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  brand: Joi.string().min(2).required(),
});

const validateBody = (name, brand) => {
  const result = productSchema.validate({ name, brand });

  if(result.error) return result;

  return { error: false };
};

module.exports = validateBody;