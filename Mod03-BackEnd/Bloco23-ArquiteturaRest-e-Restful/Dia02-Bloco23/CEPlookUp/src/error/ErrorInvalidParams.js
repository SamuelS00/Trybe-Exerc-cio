const httpsStatusCode = require('../helpers/httpsStatusCode');

const invalidParams = (message) => {
    return {
        message, 
        statusCode: httpsStatusCode.BAD_REQUEST,
        stack: Error().stack,
    };
};

module.exports = invalidParams;