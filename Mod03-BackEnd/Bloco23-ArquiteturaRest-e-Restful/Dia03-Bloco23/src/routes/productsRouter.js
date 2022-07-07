const express = require('express');
const ProductController = require('../controllers/productControllers');
const rescue = require('express-rescue');
const router = express.Router();

router.get('/', rescue(ProductController.getAll));

router.get('/:id', rescue(ProductController.getById));

router.post('/', rescue(ProductController.add));

router.delete('/:id', rescue(ProductController.exclude));

router.put('/:id', rescue(ProductController.update));

module.exports = router;