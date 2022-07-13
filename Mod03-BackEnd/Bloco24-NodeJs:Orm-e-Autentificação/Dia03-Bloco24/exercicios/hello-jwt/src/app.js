const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const ErrorMiddleware = require('./middleware/errorMiddleware');
const authRouter = require('./routes/auth.router');
const userRouter = require('./routes/user.router');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/login', authRouter);
app.use('/users', userRouter);

app.use(ErrorMiddleware);

module.exports = app;

