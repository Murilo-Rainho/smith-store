import express from 'express';

import errorHandler from './middlewares/errorHandler';

import { userRouter } from './routers';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(errorHandler);

export default app;
