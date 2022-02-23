import { Router } from 'express';

import { createProductController, getAllProductsController } from '../controllers/product';

import { validateToken } from '../middlewares/auth';

import { validateDataProductPost } from '../middlewares/product';

const router = Router();

router.post('/', validateToken, validateDataProductPost, createProductController);

router.get('/', validateToken, getAllProductsController);

export default router;
