import { Router } from 'express';

import { createOrderController } from '../controllers/order';

import { validateToken } from '../middlewares/auth';

const router = Router();

router.post('/', validateToken, createOrderController);

export default router;
