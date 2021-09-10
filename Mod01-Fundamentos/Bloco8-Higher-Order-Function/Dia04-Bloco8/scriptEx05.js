// Exercicio 5

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acumulador, interado) => {
    for(let index = 0; index < interado.length; index += 1){
      if(interado[index] === "A" || interado[index] === "a") {
      acumulador += 1;
    };
    }
    return acumulador;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);