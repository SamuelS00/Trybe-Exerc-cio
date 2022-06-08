const readline = require('readline-sync');
const fs = require('fs').promises; 

async function showFile() {
  const file = readline.question('Qual arquivo vc quer ler? ');

  try {
    const arq = await fs.readFile(file, 'utf-8');

    console.log(arq);
  } catch(err) {
    console.log('Arquivo inexistente');
  }

};

showFile();