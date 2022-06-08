const { deepStrictEqual } = require('assert');
const { writeFile } = require('fs');
const readline = require('readline-sync');
const fs = require('fs').promises;

async function fileChangeWord() {
    try {
        const file = readline.question('Qual arquivo deseja editar? ');
        const arq = await fs.readFile(file, 'utf-8');


        if(arq) {
            const oldWord = readline.question('Qual a palavra será substituida? ');
            const newWord = readline.question('Qual a nova palavra? ');

            const resultReplace = arq.replace(oldWord, newWord);
            
            await fs.writeFile(file, resultReplace);

            console.log(resultReplace);
        }
        
        console.log('deu tudo certo!!!');
    } catch(err) {
      console.log(err);
    }
  
};
  
fileChangeWord();