import { Router } from 'express';

import { createUserController } from '../controllers/user';

import { validateDataUserPost } from '../middlewares/user';

const router = Router();

router.post('/', validateDataUserPost, createUserController);

export default router;
