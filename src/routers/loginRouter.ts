import { Router } from 'express';

import { loginController } from '../controllers/user';

import { validateDataLogin, verifyUserExists } from '../middlewares/user';

const router = Router();

router.post('/', validateDataLogin, verifyUserExists, loginController);

export default router;
