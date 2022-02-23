import { Router } from 'express';

import { createProductController } from '../controllers/product';

import { validateToken } from '../middlewares/auth';

import { validateDataProductPost } from '../middlewares/product';

const router = Router();

router.post('/', validateToken, validateDataProductPost, createProductController);

export default router;
