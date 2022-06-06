const readline = require('readline-sync');
const { calculaImc } = require('../Ex01Imc/imc');
const { calculaVelocidadeM } = require('../Ex02Velocidade/velocidade');
const { sorteio } = require('../Ex03Sorteio/sorteio')

function scripts() {
    console.log('[1] - IMC | [2] - VELOCIDADE | [3] - SORTEIO \n');

    const numberInput = readline.questionInt('Qual input deve ser executado? ')

    if(+numberInput > 3 || +numberInput === 1 < 0) msg = 'Digite novamente!!'

    if(+numberInput === 1) {
        calculaImc();
    } else if (+numberInput === 2) {
        calculaVelocidadeM();
    } else if (+numberInput === 3) {
        sorteio();
    }

  console.log(numberInput)
}

scripts();