function calculaSituacao(param) {
   if(typeof param !== 'number') return 'ERRO! Não é um número!!'
   
   const number = Math.sign(param);

   if(number === 1) return 'positivo';
   if(number === -1) return 'negativo';
   
   return 'neutro'
}

console.log(calculaSituacao(10));

module.exports = calculaSituacao;