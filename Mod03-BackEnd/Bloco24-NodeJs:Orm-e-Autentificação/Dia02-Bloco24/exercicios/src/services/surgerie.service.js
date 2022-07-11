const { Surgeries, Patients } = require('../database/models/index');

const getAll = async () => {
  const surgeries = await Surgeries.findAll({
    include: [
        { 
          model: Patients, as: 'patients',
          through: { attributes: [] } 
        }
      ]
  });
  return surgeries;
};

module.exports = { getAll };