const Joi = require('joi');

const CEP_REGEX = /\d{5}-?\d{3}/;

const cepAddressSchema = Joi.object({
   cep: Joi.string().regex(CEP_REGEX).required(),
   logradouro: Joi.string().required(),
   bairro: Joi.string().required(),
   localidade: Joi.string().required(),
   uf: Joi.string().required().length(2),
});

const validateCepAddress = (cep, logradouro, bairro, localidade, uf) => {
   const { error } = cepAddressSchema.validate({ cep, logradouro, bairro, localidade, uf });
    
   if(error) throw next(error);
};

module.exports = validateCepAddress;