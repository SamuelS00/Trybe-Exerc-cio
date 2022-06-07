const { retornaPromise } = require('../Ex01RetornaPromise/retornaPromise');

function numberRandom() {
   const numRandom = Math.floor(Math.random() * 100 + 1);
   return numRandom;
}

retornaPromise(numberRandom(), numberRandom(), numberRandom())
  .then(result => console.log(`valor é de ${result}`))
  .catch(err => console.log(err));