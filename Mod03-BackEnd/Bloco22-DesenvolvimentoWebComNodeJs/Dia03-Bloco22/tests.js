const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');

const calculaSituacao = require('./calculaSituacao');
const writeFile = require('./writeFile');

sinon.stub(fs, 'writeFileSync').returns('ok');

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
})

describe('Testa função writeFile', () => {
   describe('Quando é passado um arquivo e o conteúdo', () => {
      it('retorna ok', () => {
         const resposta = writeFile('text.txt', 'feito com sucesso!!');

         expect(resposta).to.be.equals('ok')
      })

      it('o retorn é uma string', () => {
         const resposta = writeFile('text.txt', 'feito com sucesso!!');

         expect(resposta).to.be.a('string');
      })
   })
})

