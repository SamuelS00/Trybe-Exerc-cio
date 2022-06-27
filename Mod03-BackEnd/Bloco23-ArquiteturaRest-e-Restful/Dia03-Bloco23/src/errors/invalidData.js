const httpsStatusCode = require('../helpers/httpsStatusCode');

const invalidData = (message) => {
    return {
        message, 
        statusCode: httpsStatusCode.BAD_REQUEST,
        stack: Error().stack,
    };
};

module.exports = invalidData;