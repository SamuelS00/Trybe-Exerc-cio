//5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 60;
const b = 60;
const c = 60;

if (a+b+c === 180) {
    console.log("true")
} else {
    console.log("false")
}