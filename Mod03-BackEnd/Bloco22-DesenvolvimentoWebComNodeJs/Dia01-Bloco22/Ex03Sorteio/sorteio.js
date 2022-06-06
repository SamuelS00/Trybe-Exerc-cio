const readline = require('readline-sync');

function sorteio() {
  let msg = '';
  const numberInput = readline.questionInt('Digite um número para ser sorteado ');
  const numberRandom = Math.floor(Math.random() * 10 + 1);

  if(+numberInput === numberRandom) {
    msg = `Parabéns, o número ${numberInput} é o sorteado`
  } else {
    msg = `Infelizmente o resultado do sorteio é ${numberRandom}:(`
  }

  console.log(msg);
}

module.exports = { sorteio };