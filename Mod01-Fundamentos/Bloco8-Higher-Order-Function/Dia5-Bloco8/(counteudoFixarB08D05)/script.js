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

// Exercicio 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

const pares = numerosPares.filter((numero) => numero % 2 === 0)

numerosPares = [...pares]

console.log(numerosPares)

// Default Destructuring 

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};


console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

// Object Property Shorthand

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));