const express = require('express');
const router = express.Router();

const Author = require('../models/Author');

router.get('/', async(_req, res) => {
   const authors = await Author.getAll();

   res.status(200).json(authors);
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

module.exports = router;