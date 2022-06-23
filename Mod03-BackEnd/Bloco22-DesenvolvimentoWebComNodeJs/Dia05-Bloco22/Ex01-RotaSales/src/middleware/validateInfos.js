const { isDataValid, isWarrPeridodValid } = require("../../helpers/validInfos");

const validateInfos = (req, res, next) => {
  const { infos } = req.body;

  if(!infos) {
    return res.status(400).json(
        { message: 'o campo infos é obrigatório'}
    );
  }

  if(!infos.saleDate) {
    return res.status(400).json(
        { message: 'O campo saleDate é obrigatório'}
    );
  }

  if(!infos.warrantyPeriod) {
    return res.status(400).json(
        { message: 'O campo warrantyPeriod é obrigatório' }
    );
  }

  if(!isDataValid(infos.saleDate)) {
    return res.status(400).json(
        { message: 'O campo saleDate não é uma data válida' }
    );
  }

  if(!isWarrPeridodValid(infos.warrantyPeriod)) {
    return res.status(400).json(
        { message: 'O campo warrantyPeriod precisa estar entre 1 e 3'}
    );
  }
    
  next();
}

module.exports = validateInfos;