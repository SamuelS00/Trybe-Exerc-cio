const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../src/models/connection');

const ProductModel = require('../../src/models/productModel');

describe('( model layer ) - Method add ', () => {
    const name = 'Galaxy A24 mock';
    const brand = 'Samsung mock';
    
    before(async () => {
        const query = [{ insertId: 1 }];
        sinon.stub(connection, 'query').resolves(query);
    });
    
    after(async () => {
        connection.query.restore();
    });

    describe('When the product is successfully created', () => {
        it('tests if the return is an object', async () => {
            const response = await ProductModel.add(name, brand);

            expect(response).to.be.a('object');
        });

        it('tests if the return has the id of the inserted product', async () => {
            const response = await ProductModel.add(name, brand);
            expect(response).to.be.a.property('id');
        });

        it('tests if the return has the name of the inserted product', async () => {
            const response = await ProductModel.add(name, brand);
            expect(response).to.be.a.property('name');
        });

        it('tests if the return has the brand of the inserted product', async () => {
            const response = await ProductModel.add(name, brand);
            expect(response).to.be.a.property('brand');
        });
    });
});