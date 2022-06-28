const express = require('express');
const ProductController = require('../controllers/productControllers');

const router = express.Router();

router.get('/', ProductController.getAll);

router.get('/:id', ProductController.getById);

router.post('/', ProductController.add);

router.delete('/:id', ProductController.exclude);

router.put('/:id', ProductController.update);

module.exports = router;