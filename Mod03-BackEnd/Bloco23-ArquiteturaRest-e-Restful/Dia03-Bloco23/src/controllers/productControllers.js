const ProductModel = require('../models/productModel');
const ProductService = require('../services/productServices');
const httpsStatusCode = require('../helpers/httpsStatusCode');

// add swagger for node

const add = async (req, res, next) => {
  try {
    const { name, brand } = req.body;

    const newProduct = await ProductService.add(name, brand);
  
    res.status(httpsStatusCode.CREATED).json({ data: { newProduct }});
  } catch (err) {
    next(err);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const products = await ProductService.getAll();

    res.status(httpsStatusCode.OK).json({ data: products });
  } catch (err) {
    next(err)
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getById(id);
  
    res.status(httpsStatusCode.OK).json({ data: { product }});
  } catch(err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, brand } = req.body;
  
    const updatedProduct = await ProductService.update(id, name, brand);
  
    res.status(httpsStatusCode.OK).json({ data: updatedProduct});
  } catch (err) {
    next(err);
  }
};  

const exclude = async (req, res, next) => {
  try {
    const { id } = req.params;

    await ProductService.exclude(id);
  
    res.status(httpsStatusCode.NO_CONTENT).end();
  } catch (err) {
    next(err)
  }
};

module.exports = { add, getAll, getById, update, exclude };