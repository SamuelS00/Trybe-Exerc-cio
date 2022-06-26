const httpsStatusCode = require("../helpers/httpsStatusCode");
const CepService = require("../services/cepServices");

const findCepAddress = async (req, res, next) => {
    const { cep } = req.params;

    try {
        const result = await CepService.findCepAddress(cep);

        res.status(httpsStatusCode.OK).json(result);
    } catch (err) {
        next(err);
    }
};

const createCepAddress = async (req, res, next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    try {
        const result = await CepService.createCepAddress(
            cep,
            logradouro,
            bairro,
            localidade,
            uf
        );

        res.status(httpsStatusCode.OK).json(result);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    findCepAddress,
    createCepAddress,
};
