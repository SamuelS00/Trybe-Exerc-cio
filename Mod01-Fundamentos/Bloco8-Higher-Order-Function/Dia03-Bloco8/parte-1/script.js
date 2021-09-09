const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercicio 1 

const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() { 
        return books.map((book) => `Nome do Livro: ${book.name}, Gênero do livro: ${book.genre}, Autor: ${book.author.name}`)
  };
  
  assert.deepStrictEqual(formatedBookNames(), expectedResult);

//Exercicio 2 
  function nameAndAge() {
    return books
    .map((book) => (
      {
        author: book.author.name,
        age: book.releaseYear - book.author.birthYear,
      }
    ))
    .sort((obj1, obj2) => obj1.age - obj2.age);
  }
  
  assert.deepStrictEqual(nameAndAge(), expectedResult);

// Exercicio 3 

 
function fantasyOrScienceFiction() {
  const genero = books.filter((book) => book.genre === "Fantasia" || book.genre === "Ficção Científica")
  return genero;
}

assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

// Exercicio 4

function oldBooksOrdered() {
  const filtrado = books.filter((book) => {
    if(book.releaseYear + 60 < 2021) {
      return true;
    }
    return false;
  })
  
  return filtrado.sort((book1, book2) => book1.releaseYear - book2.releaseYear);
}

assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

// Exercicio 5

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const genero = books.filter((book) => book.genre === "Fantasia" || book.genre === "Ficção Científica")
  return genero.map((book) => book.author.name).sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
