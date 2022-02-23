import { Router } from 'express';

import { createUserController } from '../controllers/user';

const router = Router();

router.post('/', createUserController);

export default router;
