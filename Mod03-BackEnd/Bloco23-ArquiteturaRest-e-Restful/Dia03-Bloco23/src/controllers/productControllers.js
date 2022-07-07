const ProductService = require('../services/productServices');
const httpsStatusCode = require('../helpers/httpsStatusCode');

const add = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.add(name, brand);

  res.status(httpsStatusCode.CREATED).json({ data: { newProduct }});
};

const getAll = async (_req, res, next) => {
  const products = await ProductService.getAll();

  res.status(httpsStatusCode.OK).json({ data: products });
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const product = await ProductService.getById(id);

  res.status(httpsStatusCode.OK).json({ data: product });
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const { name, brand } = req.body;

  const updatedProduct = await ProductService.update(id, name, brand);

  res.status(httpsStatusCode.OK).json({ data: updatedProduct });
};  

const exclude = async (req, res, next) => {
  const { id } = req.params;

  await ProductService.exclude(id);

  res.status(httpsStatusCode.NO_CONTENT).end();
};

module.exports = { add, getAll, getById, update, exclude };