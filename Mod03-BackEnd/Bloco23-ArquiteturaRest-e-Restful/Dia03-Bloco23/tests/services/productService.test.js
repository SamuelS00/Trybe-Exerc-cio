const sinon = require('sinon');
const { expect } = require('chai');

const ProductService = require('../../src/services/productServices');
const ProductModel = require('../../src/models/productModel');

describe('( servives layer ) - Method add ', () => {
    const name = 'Galaxy A12';
    const brand = 'Samsung';

    before(async () => {
        const query = { id: 1, name, brand };
        sinon.stub(ProductModel, 'add').resolves(query);
    });

    after(async () => {
        ProductModel.add.restore();
    });

    describe('When the product is successfully created', () => { // traduzir comentarios..
        it('tests if the return is an object', async () => {
            const response = await ProductService.add(name, brand);

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