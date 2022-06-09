const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.json({ "message": "pong" }));

app.post('/hello', function(req, res) { 
  const { nameUser } = req.body;
  res.status(200).json({ "message": `Hello, ${nameUser}!`})
});

app.post('/greetings', function(req, res) { 
  const { nameUser, ageUser } = req.body;
  const isUnderage = parseInt(ageUser, 10) <= 17

  if (isUnderage) return res.status(401).json({ message: `Unauthorized` });

  res.status(200).json({ message: `Hello, ${ nameUser}!` });
});

app.put('/users/:name/:age'), function(req, res) {

  console.log(req.params);

  const { name , age } = req.params;

  res.status(204).json({ message: `Seu nome é ${ name } e você tem ${ age } anos de idade` })
}

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

