const ProductModel = require('../models/productModel');
const ProductService = require('../services/productServices');
const httpsStatusCode = require('../helpers/httpsStatusCode');

// add as validações na camada service;

// add swagger for node

const add = async (req, res, next) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.add(name, brand);

  res.status(httpsStatusCode.CREATED).json({ data: { newProduct }});
};

const getAll = async (_req, res, _next) => {
  const products = await ProductService.getAll();

  res.status(httpsStatusCode.OK).json({ data: products });
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const product = await ProductService.getById(id);

  res.status(httpsStatusCode.OK).json({ data: { product }});
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  await ProductModel.update(id, name, brand);

  res.status(httpsStatusCode.OK).json({ data: { id, name, brand }});
};  

const exclude = async (req, res, next) => {
  const { id } = req.params;

  await ProductService.exclude(id);

  res.status(httpsStatusCode.NO_CONTENT).end();
};

module.exports = { add, getAll, getById, update, exclude };