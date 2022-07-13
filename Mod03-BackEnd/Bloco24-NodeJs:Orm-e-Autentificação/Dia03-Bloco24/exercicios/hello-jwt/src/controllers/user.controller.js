const userService = require('../services/user.service');

const getAll = async (req, res, _next) => {
   const users = await userService.getAll();

   return res.status(200).json({ users });
};

module.exports = { getAll };