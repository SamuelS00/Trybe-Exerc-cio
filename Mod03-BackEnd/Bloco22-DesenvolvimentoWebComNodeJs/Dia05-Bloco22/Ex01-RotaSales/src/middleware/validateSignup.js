const generateToken = require("../../helpers/generateToken");



const validateSignup = (req, res, next) => {
  const {  email, password, firstName, phone } = req.body;
  const token = generateToken();

  if(!email || !password || !firstName || !phone ) {
    res.status(401).json({ message: 'missing fields' });
  }

  if(!validEmail(email)) {
    res.status(401).json({ message: 'email invalid'});
  }

  if(firstName.length < 3) {
    res.status(401).json({ message: 'cannot be less than 3 characters'});
  }

  req.headers.authorization = { token };

  next();
};

module.exports = validateSignup;