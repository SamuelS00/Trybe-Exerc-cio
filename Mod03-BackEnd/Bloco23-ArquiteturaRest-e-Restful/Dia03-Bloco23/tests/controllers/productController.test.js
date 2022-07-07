const sinon = require('sinon');
const { expect } = require('chai');

const ProductController = require('../../src/controllers/productControllers');
const ProductServices = require('../../src/services/productServices');

const httpsStatusCode = require('../../src/helpers/httpsStatusCode');
const invalidData = require('../../src/errors/invalidData');

describe.only('Ao chamar o controller de add', () => { // tirar ponto only
    // describe('When the given payload is valid', () => {
        
    // });

    describe('When the given payload is valid', () => { // corrigir describe 
        const req = {};
        const res = {};

        before(() => {
            req.body = {};

            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();

        });

        it('is called with status 400', async () => {
            await ProductController.add(req, res);

            expect(res.status.calledWith(httpsStatusCode.BAD_REQUEST)).to.be.equal(true);
        });
    });
});