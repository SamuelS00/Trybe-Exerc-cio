const authService = require('../services/auth.service');

const create = async (req, res, next) => {
  const { email, username, password } = req.body;
  const token = await authService.create(email, username, password);

  res.status(200).json({ token })
};

module.exports = { create };