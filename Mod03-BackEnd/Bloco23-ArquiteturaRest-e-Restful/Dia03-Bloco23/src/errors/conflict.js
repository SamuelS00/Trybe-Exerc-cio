const httpsStatusCode = require('../helpers/httpsStatusCode');

const conclict = (message) => {
    return {
        message, 
        statusCode: httpsStatusCode.CONFLICT,
        stack: Error().stack,
    };
};

module.exports = conclict;