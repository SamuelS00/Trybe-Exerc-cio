const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(2).required(),
  brand: Joi.string().min(2).required(),
});

const validateBody = (name, brand) => {
  const { error } = productSchema.validate({ name, brand });
  if(error) return { error };

  return { error: false };
};

module.exports = validateBody;