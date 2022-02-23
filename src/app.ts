import express from 'express';

import errorHandler from './middlewares/errorHandler';

import { userRouter, loginRouter } from './routers';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use('/users', userRouter);

app.use(errorHandler);

export default app;
