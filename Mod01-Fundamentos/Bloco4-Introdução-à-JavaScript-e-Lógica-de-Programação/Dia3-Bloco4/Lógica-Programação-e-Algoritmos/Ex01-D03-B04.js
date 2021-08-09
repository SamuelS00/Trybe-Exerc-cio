//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let aste = ""
let n = 5;

for (let linhas = 0; linhas < n; linhas += 1) {
  aste += "*"
}
   
for (let colunas = 0; colunas < n; colunas += 1) {
   console.log(aste)
}
