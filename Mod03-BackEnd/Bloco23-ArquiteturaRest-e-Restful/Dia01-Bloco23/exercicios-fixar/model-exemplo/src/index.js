const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const authorRouter = require('./routes/authorRouter');

app.use('/authors', authorRouter)

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});