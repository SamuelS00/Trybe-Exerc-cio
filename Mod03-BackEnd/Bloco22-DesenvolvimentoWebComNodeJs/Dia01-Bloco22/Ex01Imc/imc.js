const readline = require('readline-sync');

const calculaImc = () => {
    const PESO = readline.questionFloat('Qual seu peso? ');
    const ALTURA = readline.questionInt('Qual a sua altura? ');
    let RESULT = '';

    console.log(`Peso: ${ PESO }, Altura: ${ ALTURA }`);

    const imc = ( PESO / Math.pow( ALTURA / 100, 2)).toFixed(2);
    
      if (imc < 18.5) {
        RESULT = 'Abaixo do peso (magreza)'
      } else if (imc >= 18.5 && imc < 25) {
        RESULT = 'Peso normal)'
      } else if (imc >= 25 && imc < 30) {
        RESULT = 'Acima do peso (sobrepeso)'
      } else if (imc >= 30 && imc < 35) {
        RESULT = 'Obesidade grau 1'
      } else if (imc >= 35 && imc < 40) {
        RESULT = 'Obesidade grau 2'
      } else {
        RESULT = 'Obesidade grau 3 e 4';
      }

    console.log(`IMC: ${ imc }, ESTADO: ${ RESULT }`);
} 

module.exports = { calculaImc };

