const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');

app.use('/authors', authorRouter);
app.use('/books', bookRouter);

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});