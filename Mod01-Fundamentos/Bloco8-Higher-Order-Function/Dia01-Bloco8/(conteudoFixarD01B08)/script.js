// Ao chamar a função doingThings:
doingThings = (func) => {
  console.log(func())
}

// Ela deve retornar o valor do respectivo parâmetro, neste caso:

const wakeUp = () => 'Acordando!!'; 

const breakfast = () => 'Bora tomar café!!';
 
const sleep = () => 'Partiu dormir!!';

// Ao chamar a função doingThings:

doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!