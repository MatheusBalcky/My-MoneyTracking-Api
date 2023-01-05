import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes/index';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors(), express.json());

app.use(routes);

app.use(errorHandler);

app.get('/test', (req, res) => {
  res.status(200).send('Hello world');
});

export default app;
