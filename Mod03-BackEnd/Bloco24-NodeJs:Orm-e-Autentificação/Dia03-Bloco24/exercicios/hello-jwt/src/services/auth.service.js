const { User } = require('../database/models/index');
const Joi = require('joi');
const { createToken } = require('../helpers/JWT.service');

const singinSchema = Joi.object({
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(5).required(),
  password: Joi.string().min(5).required(),
});

const create = async (email, username, password) => {
  const { error } = singinSchema.validate({ email, username, password });

  if(error) throw error;

  const newUser = await User.create({ email, username, password });

  return createToken(newUser);
};

module.exports = { create }