const httpsStatusCode = require('../helpers/httpsStatusCode');

const notFound = (message) => {
    return {
        message,
        statusCode: httpsStatusCode.NOT_FOUND,
        stack: Error().stack,
    };
};

module.exports = notFound;