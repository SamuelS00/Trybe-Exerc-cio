const express = require('express');
const router = express.Router();

const validateProductName = require('../middleware/validateProductName');
const validateInfos = require('../middleware/validateInfos');

router.get('/', (req, res) => {
   res.status(200).send('rota sales');
});

router.post('/', validateProductName,validateInfos, (req, res) => {
   res.status(201).json({ "message": "Venda cadastrada com sucesso" });
});

module.exports = router;