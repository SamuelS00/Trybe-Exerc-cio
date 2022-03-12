const readline = require('readline-sync');

function calculaVelocidadeM () {
  const d = readline.questionInt('Distância percorrida (m): ');
  const t = readline.questionInt('Tempo gasto (s): ');

  const velocidadeM = (d / t).toFixed(2);

  console.log(`Velocidade média: ${velocidadeM} m/s`);
}

calculaVelocidadeM();