const CepModel = require('../models/cepModels');

const validateCep = require('../helpers/validateCep');
const validateCepAddress = require('../helpers/validateNewCepAddress');

const notFound = require('../error/ErrorNotFound');
const invalidData = require('../error/ErrorInvalidData');
const conflict = require('../error/ErrorConflict');

const findCepAddress = async (cep) => {
    if(!validateCep(cep)) throw invalidData('CEP inválido');
    
    const result = await CepModel.findCepAddress(cep);

    if(result.length === 0) throw notFound('CPF não encontrado')
    
    return result;
};

const createCepAddress = async (cep, logradouro, bairro, localidade, uf) => {
    
    validateCepAddress(cep, logradouro, bairro, localidade, uf);

    const result = await CepModel.findCepAddress(cep, logradouro, bairro, localidade, uf);

    if(result.length > 0) throw conflict('CPF já existente');

    const address = await CepModel.createCepAddress(cep, logradouro, bairro, localidade, uf);

    return address;
};

module.exports = {
    findCepAddress,
    createCepAddress,
}