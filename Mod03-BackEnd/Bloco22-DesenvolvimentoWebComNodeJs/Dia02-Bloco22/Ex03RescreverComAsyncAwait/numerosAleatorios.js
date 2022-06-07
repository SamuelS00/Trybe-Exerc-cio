const { retornaPromise } = require('../Ex01RetornaPromise/retornaPromise');

function numberRandom() {
    const numRandom = Math.floor(Math.random() * 100 + 1);
    return numRandom;
};

async function retornaPromiseAsync () {
    try {
        const resul = await retornaPromise(numberRandom(), numberRandom(), numberRandom());
        console.log(resul);
    } catch(err) {
        console.log(err);
    } 
};

retornaPromiseAsync();