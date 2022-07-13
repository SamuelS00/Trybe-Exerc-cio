function UnauthorizedError(message) {
  return {
    message,
    statusCode: 401,
    stack: Error().stack,
  };
}

module.exports = UnauthorizedError;