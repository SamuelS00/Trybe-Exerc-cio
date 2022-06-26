const CEP_REGEX = /\d{5}-?\d{3}/;

const validateCep = (cep) => {
   if(!CEP_REGEX.test(cep)) return false;

   return true;
};

module.exports = validateCep;