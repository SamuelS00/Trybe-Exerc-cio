const express = require('express');
const router = express.Router();

const UserModel = require('../model/UserModel');
const UserValidate = require('../helpers/UserValidate');

router.get('/', async (req, res) => {
  const users = await UserModel.getAll();

  res.status(200).json(users);
});

router.post('/', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const isError = UserValidate.isNewUserValid(first_name, last_name, email, password);

  if(isError.error) {
    return res.status(400).json({ message: isError.message});
  } 

  const id = await UserModel.create(first_name, last_name, email, password); 
  
  const newUser = {
    id,
    first_name,
    last_name,
    email,
    password
  }

  res.status(200).json(newUser);
});

module.exports = router;