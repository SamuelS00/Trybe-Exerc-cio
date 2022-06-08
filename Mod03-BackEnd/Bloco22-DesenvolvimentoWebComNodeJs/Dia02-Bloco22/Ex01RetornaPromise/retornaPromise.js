function retornaPromise(param1, param2, param3) {
  
  const promise = new Promise((resolve, reject) => {
    const numbers = [param1, param2, param3];

    console.log(numbers)

    const isAllNumbers = numbers.some((n) => typeof n !== 'number');
    const sum = numbers.reduce((prev, acc) => prev + acc, 0);

    const resultado = sum > 50;
  
    if(isAllNumbers) reject(new Error('Informe apenas números'));
    if(!resultado) reject(new Error('Valor muito baixo'));

    resolve(sum);
  });

  return promise;
}

module.exports = { retornaPromise };