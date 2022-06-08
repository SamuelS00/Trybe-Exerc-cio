const fs = require('fs').promises; // deixar metodos assincronos, trata-lo como promisses;

const readSimpsons = async () => {
    try { // try cat não le assincronidade. 
        const result = await fs.readFile('simpsons.json', 'utf-8');  // await ta esperando para colocar o retorno na variavel
        const resultParse = JSON.parse(result);

        resultParse.forEach((p) => console.log(`${p.id} - ${p.name}`));
    } catch(err) {
        console.error(err);
    };
};

// não usar o async/await e o .then()

const readSimpsonsById = async(id) => {
    try { // try cat não le assincronidade. 
        const result = await fs.readFile('simpsons.json', 'utf-8');  // await ta esperando para colocar o retorno na variavel. Faz o codigo ser sequencial;
        const resultParse = JSON.parse(result);
        const personById = resultParse.filter((p) => p.id == id);

        if(personById.length === 0) throw Error("id não encontrado")

        personById.forEach((p) => console.log(`${p.id} - ${p.name}`));
    } catch(err) {
        console.error(err);
    };
};

const readSimpsonsWithoutId10And6 = async(id) => {
    try {
        const result = await fs.readFile('simpsons.json', 'utf-8');
        const resultParse = JSON.parse(result);
        const personWithoutId10And6 = resultParse.filter((p) => p.id != 10 && p.id != 6);

        personWithoutId10And6.forEach((p) => console.log(`${p.id} - ${p.name}`));
    } catch(err) {
        console.error(err);
    };
};

const readAndWrite = async() => {
    try {
        const result = await fs.readFile('simpsons.json', 'utf-8');
        const resultParse = JSON.parse(result);
        const personWthId1And4 = resultParse.filter((p) => p.id == 1 || p.id == 4);

        const resultStringfy = JSON.stringify(personWthId1And4);
        const resultWrite = await fs.writeFile('simpsonFamily.json', resultStringfy);

        console.log(resultWrite);
    } catch(err) {
        console.log(err);
    };
};

const writeSimpsonsFamily = async(person) => {
  try {
    const result = await fs.readFile('simpsonFamily.json', 'utf-8');  // await ta esperando para colocar o retorno na variavel
    const resultParse = JSON.parse(result);
    const resultJoin = [...person, ...resultParse];

    const resultStringfy = JSON.stringify(resultJoin);
    await fs.writeFile('simpsonFamily.json', resultStringfy); 

  } catch(err) {
    console.log(err);
  }
};

const wrireNelsonInSimpsonsFamily = async () => {
    try {
        const result = await fs.readFile('simpsons.json', 'utf-8');
        const resultParse = JSON.parse(result);

        const filterNelson = resultParse.filter((p) => p.name == 'Nelson Muntz');
        
        writeSimpsonsFamily(filterNelson)

    } catch (err) {
        console.log(err)
    };
};

// readSimpsons();
// readSimpsonsById(2);
// readSimpsonsWithoutId10And6(); 
// readAndWrite();
// wrireNelsonInSimpsonsFamily();