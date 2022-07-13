require('dotenv/config');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (user) => {
    const admin = user.username === 'admin' && user.password === 's3nh4S3gur4???'

    const token = jwt.sign({ data: { user, admin } }, JWT_SECRET, {
      expiresIn: '60m',
      algorithm: 'HS256',
    });

    return token;
}

module.exports = {createToken };