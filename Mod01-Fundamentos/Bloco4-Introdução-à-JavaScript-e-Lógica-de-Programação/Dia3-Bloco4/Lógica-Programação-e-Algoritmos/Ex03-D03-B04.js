// 3- Agora inverta o lado do triângulo

let n = 5;

for (let index = 1; index <= n; index++) {
  let linha = '';
  for (let index2 = 0; index2 < n - index; index2++) {
    linha += ' ';
  }
  for (let index3 = 0; index3 < index; index3++) {
    linha += '*';
  }
  console.log(linha);
}