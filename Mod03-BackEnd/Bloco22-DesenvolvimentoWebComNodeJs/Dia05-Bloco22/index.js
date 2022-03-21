const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const teamRouter = require('./routers/teamRouter');

const err =  require('./middlewares/routerNotFound');

const PORT = 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/posts', postRouter);
app.use('/teams', teamRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));
app.use(err.routerNotFound);

app.listen(PORT, () => console.log(`Run server http://localhost:${PORT}`));