const express = require('express');
const router = express.Router();

const rescue = require('express-rescue');

const CepController = require('../controllers/cepController');

router.get('/ping', (req, res) => {
    res.status(200).json({ message: 'pong!'});    
});

router.get('/:cep', rescue(CepController.findCepAddress));

router.post('/', rescue(CepController.createCepAddress));

module.exports = router;