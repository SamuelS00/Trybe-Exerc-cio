const express = require('express');
const rescue = require('express-rescue')
const ProductController = require('../controllers/productControllers');

const router = express.Router();

router.get('/', rescue(ProductController.getAll));

router.get('/:id', rescue(ProductController.getById));

router.post('/', rescue(ProductController.add));

router.delete('/:id', rescue(ProductController.exclude));

router.put('/:id', rescue(ProductController.update));

module.exports = router;