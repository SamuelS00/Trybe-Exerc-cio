const validateToken = (req, res, next) => {
  const { authorization: { token }} = req.headers;

  console.log(req.headers);

  if(token.length !== 16 || token === '' || !token) {
    res.status(401).json({ message: 'token inválido!!!'});
  }

  next();
}

module.exports = validateToken;