function retornaPromise(param1, param2, param3) {
  
  const promise = new Promise((resolve, reject) => {
    const numbers = [param1, param2, param3];

    const isAllNumbers = numbers.some((n) => typeof n !== 'number');
    const sum = numbers.reduce((prev, acc) => prev + acc, 0);

    const resultado = [sum > 50, sum]

  
    if(isAllNumbers) reject(new Error('Informe apenas números'));
    if(!resultado) reject(new Error('Valor muito baixo'));

    resolve(resultado[1])
  });

  return promise;
}

retornaPromise(50, 20, 30)
  .then(result => console.log(`valor é de ${result}`))
  .catch(err => console.log(err))

module.exports = { retornaPromise };