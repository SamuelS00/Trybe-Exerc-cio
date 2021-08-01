//6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ímpares = [];
let index = 0;

for (let number of numbers) {
    if (number % 2 == 1) {
    ímpares[index] = number;
    index++;
  }
}

if (ímpares == 0) {
   console.log("nenhum valor ímpar encontrado");
} else {
   console.log(ímpares)
}
