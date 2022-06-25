const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter')

require('dotenv').config();
app.use(bodyParser.json());
;

app.use('/user', userRouter);


const PORT = process.env.PORT;

app.listen(PORT, () => {
   console.log(`Ouvindo a porta ${PORT}`);
})