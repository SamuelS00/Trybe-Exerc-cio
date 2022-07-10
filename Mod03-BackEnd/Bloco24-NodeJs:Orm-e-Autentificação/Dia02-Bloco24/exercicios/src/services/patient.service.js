const { Patients, Surgeries } = require('../database/models/index');

const getAll = async () => {
  const patients = await Patients.findAll({
    include: [
      { 
        model: Surgeries, as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] } 
      }
    ]
  });

  return patients;
};

const create = async (fullname, plan_id) => {  
  const newPatient = await Patients.create({ fullname, plan_id });
  return newPatient;
};

module.exports = { create, getAll };