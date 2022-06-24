import { Router } from 'express';
import {
	getSignupHandler,
	postSignupHandler,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/signup', getSignupHandler);
authRouter.post('/signup', postSignupHandler);

export default authRouter;
