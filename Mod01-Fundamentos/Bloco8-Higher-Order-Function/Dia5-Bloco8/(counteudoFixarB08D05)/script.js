//Spread Operator

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Melancia', 'Maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Creme de Leite', 'Mel'];

const fruitSalad = (fruit, additional) => {
  const completed = [...fruit, ...additional]
  return completed;
}

console.log(fruitSalad(specialFruit, additionalItens));

// Object e Array destructuring
// Exercicio 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, realizaSaudacao] = saudacoes

// Exercicio 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

[comida, animal, bebida] = [bebida, comida, animal]; 
console.log(comida, animal, bebida);