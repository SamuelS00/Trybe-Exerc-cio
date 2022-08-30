import express from 'express';
import plantRouter from './routes/plants.router';

const app = express();

app.use(express.json());

app.use('/plants', plantRouter);

export default app;