const surgerieService = require('../services/surgerie.service');

const getAll = async (req, res, next) => {
  try {
    const { name } = req.query;

    const surgeries = await surgerieService.getAll();
  
    res.status(200).json(surgeries);
  } catch (err) {
    next(err)
  }
};

module.exports = { getAll };