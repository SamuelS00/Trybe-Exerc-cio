//11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// INSS (Instituto Nacional do Seguro Social)
//    
//    Salário bruto até R$ 1.556,94: alíquota de 8%
//    Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//    Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//    Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// 
// IR (Imposto de Renda)
//   
//    Até R$ 1.903,98: isento de imposto de renda
//    De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//    De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//    De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//    Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 3000;
let salarioLiquido;
let salarioDeduzidoInss
let impostoINSS; 
let impostoRENDA;
let parcelaADeduzirIR;

if (salarioBruto <= 1556,94) {
   impostoINSS = salarioBruto * 8/100;
   salarioDeduzidoInss = salarioBruto - impostoINSS;
} else if (salarioBruto >= 1556,95 && salarioBruto <= 2594,92 ) {
   impostoINSS = salarioBruto * 9/100;
   salarioDeduzidoInss = salarioBruto - impostoINSS;
} else if (salarioBruto >= 2.594,93 && salarioBruto <= 5.189,82) {
   impostoINSS = salarioBruto * 11/100;
   salarioDeduzidoInss = salarioBruto - impostoINSS;
} else if (salarioBruto > 5.189,82) {
   impostoINSS = salarioBruto - 570,88;
   salarioDeduzidoInss = salarioBruto - impostoINSS;
}

if (salarioDeduzidoInss <= 1903,98) {
   impostoRENDA = 0;
   parcelaADeduzirIR = 0; 
   salarioLiquido = salarioDeduzidoInss - impostoRENDA - parcelaADeduzirIR;
} else if (salarioDeduzidoInss >= 1903,99 && salarioDeduzidoInss <= 2826,65) {
   impostoRENDA = salarioDeduzidoInss * 7,5/100;
   parcelaADeduzirIR = 142,80;
   salarioLiquido = salarioDeduzidoInss - impostoRENDA - parcelaADeduzirIR;
} else if (salarioDeduzidoInss >= 2826,66 && salarioDeduzidoInss <= 3751,05) {
   impostoRENDA = salarioDeduzidoInss * 15/100;
   parcelaADeduzirIR = salarioDeduzidoInss - 354,80;
   salarioLiquido = salarioDeduzidoInss - impostoRENDA - parcelaADeduzirIR;
} else if (salarioDeduzidoInss >= 3751,06 && salarioDeduzidoInss <= 4664,68) {
   impostoRENDA = salarioDeduzidoInss * 22,5/100;
   parcelaADeduzirIR = salarioDeduzidoInss - 636,13; 
   salarioLiquido = salarioDeduzidoInss - impostoRENDA - parcelaADeduzirIR;
} else if (salarioDeduzidoInss > 4664,68) {
   impostoRENDA = salarioDeduzidoInss * 27,5/100;
   parcelaADeduzirIR = salarioDeduzidoInss - 869,36; 
   salarioLiquido = salarioDeduzidoInss - impostoRENDA - parcelaADeduzirIR;
} else {
    console.log("Numero Invalido")
}


console.log(salarioLiquido)