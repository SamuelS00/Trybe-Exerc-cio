const patientService = require('../services/patient.service');

const getAll = async (req, res, next) => {
  const patients = await patientService.getAll();

  res.status(200).json(patients);
};

const create = async (req, res, next) => {
  try {
    const { fullname, plan_id } = req.body;
    
    const newPatient = await patientService.create(fullname, plan_id);

    return res.status(201).json(newPatient);
  } catch(err) {
    next(err)
  }
};

module.exports = { create, getAll };