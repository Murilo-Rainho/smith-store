import { Router } from 'express';

import { createOrderController } from '../controllers/order';

import { validateToken } from '../middlewares/auth';

import { validateDataOrderPost } from '../middlewares/order';

const router = Router();

router.post('/', validateToken, validateDataOrderPost, createOrderController);

export default router;
