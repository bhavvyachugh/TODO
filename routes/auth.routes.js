import { Router } from 'express';
import { getSignupHandler } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/signup', getSignupHandler);

export default authRouter;
