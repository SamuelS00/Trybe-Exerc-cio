const express = require('express');
const router = express.Router();

const UserModel = require('../model/UserModel');
const UserValidate = require('../helpers/UserValidate');

router.get('/', async (req, res) => {
  const users = await UserModel.getAll();

  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const user = await UserModel.findById(id);

  if(!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado'});
  }

  res.status(200).json(user)
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password } = req.body;

  const user = await UserModel.findById(id);

  if(!user) {
    return res.status(404).json({ error: true, message: 'Usuário não encontrado'});
  }

  const isError = UserValidate.isNewUserValid(first_name, last_name, email, password);

  if(isError.error) {
    return res.status(400).json({ error: true, message: isError.message});
  } 

  await UserModel.update(id, first_name, last_name, email, password);

  const newUser = {
    id, 
    first_name,
    last_name,
    email,
    password }

  res.status(200).json(newUser);
});

router.post('/', async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  const isError = UserValidate.isNewUserValid(first_name, last_name, email, password);

  if(isError.error) {
    return res.status(400).json({ error: true, message: isError.message});
  } 

  const id = await UserModel.create(first_name, last_name, email, password); 
  
  const newUser = {
    id,
    first_name,
    last_name,
    email,
    password
  }

  res.status(201).json(newUser);
});

module.exports = router;