//7- Ulilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorV = 0;

for (let number of numbers) {
    
    if (menorV == 0) {
      menorV = numbers[0];
    } else if (number < menorV) {
      menorV = number;
  

console.log(menorV)
