const { expect } = require('chai');

const calculaSituacao = require('./calculaSituacao');

describe('Testa função calculaSituacao', () => {
   describe('Quando for um número', () => {
      it('retorna positivo', () => {
       const resposta = calculaSituacao(4);
   
       expect(resposta).to.be.equals('positivo');
      })
   
      it('retorna negativo', () => {
         const resposta = calculaSituacao(-4);
     
         expect(resposta).to.be.equals('negativo');
      })
      it('retorna neutro', () => {
         const resposta = calculaSituacao(0);
     
         expect(resposta).to.be.equals('neutro');
      })
   })
   
   describe('Quando não for um número', () => {
      it('retorna ERRO! Não é um número!!', () => {
         const resposta = calculaSituacao('string');
     
         expect(resposta).to.be.equals('ERRO! Não é um número!!');
      })
   })   
});

