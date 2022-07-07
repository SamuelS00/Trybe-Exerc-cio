const ErrorMiddleware = (err, _req, res, _next) => {
    console.log(err, 'middleware de erro');
  
    if (err.statusCode) {
      return res.status(err.statusCode).json({ message: err.message });
    }
  
    res
      .status(500)
      .json({ message: 'Erro interno do servidor' });

};
module.exports = ErrorMiddleware;