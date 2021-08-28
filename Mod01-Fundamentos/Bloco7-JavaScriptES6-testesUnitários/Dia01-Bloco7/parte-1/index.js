// ex01 - parte 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// ex02 - parte 1

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenado = oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${ordenado} se encontram ordenados de forma crescente !`);

