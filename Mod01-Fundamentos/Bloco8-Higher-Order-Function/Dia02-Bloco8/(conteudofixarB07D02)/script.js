// Exercicio sobre forEach
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
//emailListInData.forEach(showEmailList);

// Exercicios sobre find 

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => number % 3 === 0 && number % 5 === 0;

const isDivisible = numbers.find(findDivisibleBy3And5);

console.log(isDivisible)

// 2 - Exercicio Find

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

const fiveLetters = names.find(findNameWithFiveLetters);

console.log(fiveLetters)

// 3 - Exercicio Find 
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (id) => musicas.find(musica => musica.id === id)

console.log(findMusic("31031685"))

// Exercicios sobre Array.some e Array.every

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((nome) => nome === name)

console.log(hasName(names, 'Ana'))

// Exercicio 2 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((obj) => obj.age >= minimumAge)

console.log(verifyAges(people, 18));

// Exercicios Array.sort() 

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((obj, obj2) => obj.age - obj2.age) 

console.log(people);

// Exercicio 2

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((obj, obj2) => obj2.age - obj.age) 

console.log(people);
