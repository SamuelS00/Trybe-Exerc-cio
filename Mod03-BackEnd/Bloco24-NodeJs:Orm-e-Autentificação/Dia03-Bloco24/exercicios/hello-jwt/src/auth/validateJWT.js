require('dotenv').config();

const { User } = require('../database/models/index');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const UnauthorizedError = require('../errors/UnauthorizedError');
const validateToken = async (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token) return UnauthorizedError('Token não encontrado');

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findOne({ where: { username: decoded.data.user.username }});

    if(!user) { 
      return res.status(401).json({ message: 'Erro ao procurar usuário do token. '});
    };

    req.user = user;

    next();
};

const validateAdmin = async(req, res, next) => {
  const token = req.headers['authorization'];

  if(!token) return UnauthorizedError('Token não encontrado');

  const decoded = jwt.verify(token, JWT_SECRET);

  console.log(decoded);

  if(!decoded.data.admin) {
    return res.status(403).json({ message: 'Restricted access'});
  };

  next();
}

module.exports = { validateToken, validateAdmin };