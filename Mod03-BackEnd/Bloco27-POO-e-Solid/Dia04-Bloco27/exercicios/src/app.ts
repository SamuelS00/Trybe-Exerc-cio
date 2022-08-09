import express from 'express';
import plantUser from './routes/Plant.routes';

const app = express();

app.use(express.json());
app.use('/plants', plantUser);

export default app;