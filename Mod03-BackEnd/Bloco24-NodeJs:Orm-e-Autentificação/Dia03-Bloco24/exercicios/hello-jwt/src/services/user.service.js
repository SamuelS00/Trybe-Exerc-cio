const { User } = require('../database/models/index');

const getAll = async () => {
  const users = await User.findAll()
  return users;
};

module.exports = { getAll };