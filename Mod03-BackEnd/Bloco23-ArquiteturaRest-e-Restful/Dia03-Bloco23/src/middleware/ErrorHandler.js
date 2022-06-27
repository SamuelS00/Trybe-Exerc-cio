const httpsStatusCode = require('../helpers/httpsStatusCode');

const ErrorHandler = (err, _req, res, _next) => {    
    if(err.statusCode) {
        return res.status(err.statusCode).json({ message: err.message });
    };

    console.log(err);

    res.status(httpsStatusCode.INTERNAL_SERVER).json({ message: 'Erro interno do servidor'});
};

module.exports = ErrorHandler;