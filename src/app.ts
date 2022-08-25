import express from 'express';
import 'express-async-errors';
import carsRouter from './routes/carRoute';
import motoRouter from './routes/motorcycleRoute';
import errorHandler from './middlewares/error';

const app = express();
app.use(express.json());
app.use(carsRouter);
app.use(motoRouter);
app.use(errorHandler);
export default app;
