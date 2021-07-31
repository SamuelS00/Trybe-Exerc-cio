//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 7;
const b = 3;
const c = 9;
let maiorV = 0;

if (a > b && a > c) {
   maiorV = a;
} else if (b > a && b > c) {
   maiorV = b;
} else {
   maiorV = c;
}

console.log(maiorV)