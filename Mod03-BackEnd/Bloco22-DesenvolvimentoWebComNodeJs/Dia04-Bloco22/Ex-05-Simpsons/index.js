const fs = require('fs').promises;
const express = require('express');
const { writeFile } = require('fs');
const app = express();
const bodyParser = require('body-parser');
const generateToken = require('../Ex-07-Authorization/aurithozation');

app.use(bodyParser.json());

function getSimpsons () {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then(fileContent => JSON.parse(fileContent));
}

function setSimpsons (newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

app.get('/simpsons', async(_req, res) => {
    const simpsons = await getSimpsons();

    res.status(200).json(simpsons);
});

app.get('/simpsons/:id', async(req, res) => {
    const { id } = req.params;
    const simpsons = await getSimpsons();

    const personagem = simpsons.find((r) => r.id === id);

    if (!personagem) {
      return res.status(404).json({ message: 'simpson not found' });
    }
  
    return res.status(202).json(personagem);
});

app.post('/simpsons', async(req, res) => {
   const { id, name } = req.body;

   const simpsons = await getSimpsons();

   if(simpsons.map((pers) => pers.id).includes(id)) {
      return res.status(409).json({ message: 'id already exists'})
   }

   simpsons.push({ id, name });

   await setSimpsons(simpsons);

   res.status(204).end();
});

app.get('/signup', (req, res) => {
  const { token } = 
     
  res.status(200).json({ message: 'palmeiras' })
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
