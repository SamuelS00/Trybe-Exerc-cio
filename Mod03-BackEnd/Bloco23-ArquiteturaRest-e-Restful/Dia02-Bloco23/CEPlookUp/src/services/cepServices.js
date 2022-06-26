const CepModel = require('../models/cepModels');

const validateCep = require('../helpers/validateCep');
const notFound = require('../error/ErrorNotFound')
const invalidData = require('../error/ErrorInvalidData')

const findCepAddress = async (cep) => {
    if(!validateCep(cep)) throw invalidData('CEP inválido');
    
    const result = await CepModel.findCepAddress(cep);

    if(result.length === 0) throw notFound('CPF não encontrado')
    
    return result;
};

module.exports = {
    findCepAddress,
}