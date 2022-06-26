// chamar o service

// colocar o try cat aqui.

// aqui coloco as validações que utilização req e res. ( Não são regras de negocio. );

// mensagens personalizadas e status;

// chamar o httpsStatusCode. Mas fácil para encontrar o tipo de erro.

// centralizar os erros da aplicação no middledware de erro.


const httpsStatusCode = require('../helpers/httpsStatusCode');
const CepService = require('../services/cepServices');

const findCepAddress =  async (req, res, next) => {
    const { cep } = req.params;

    try {
       const result = await CepService.findCepAddress(cep);

       res.status(httpsStatusCode.OK).json(result);
    } catch(err) {
       next(err);
    }
};

module.exports = {
    findCepAddress,
};

