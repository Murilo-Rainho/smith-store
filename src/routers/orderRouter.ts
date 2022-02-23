import { Router } from 'express';

import { createOrderController, getOrderByIdController } from '../controllers/order';

import { validateToken } from '../middlewares/auth';

import { validateDataOrderPost } from '../middlewares/order';

const router = Router();

router.post('/', validateToken, validateDataOrderPost, createOrderController);

router.get('/:id', validateToken, getOrderByIdController);

export default router;
