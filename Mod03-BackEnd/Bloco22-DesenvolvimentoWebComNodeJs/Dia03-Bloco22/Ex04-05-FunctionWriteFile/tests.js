const fs = require('fs');
const { expect } = require('chai');
const sinon = require('sinon');

const writeFile = require('./writeFile');

sinon.stub(fs, 'writeFileSync').returns('ok');

describe('Testa função writeFile', () => {
    describe('Quando é passado um arquivo e o conteúdo', () => {
       it('retorna ok', () => {
          const resposta = writeFile('text.txt', 'feito com sucesso!!');
 
          expect(resposta).to.be.equals('ok')
       })
 
       it('o retorno é uma string', () => {
          const resposta = writeFile('text.txt', 'feito com sucesso!!');
 
          expect(resposta).to.be.a('string');
       })
    })
 })