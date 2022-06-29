const httpsStatusCode = require('../helpers/httpsStatusCode');

const ErrorHandler = (err, _req, res, _next) => {
    console.log(err, 'middleware de erro');

    if(err.statusCode) {
        return res.status(err.statusCode).json({ message: err.message });
    };

    res.status(httpsStatusCode.INTERNAL_SERVER).json({ message: 'Erro interno do servidor'});
};

module.exports = ErrorHandler;