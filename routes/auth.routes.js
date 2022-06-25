import { Router } from 'express';
import {
	getLoginHandler,
	getSignupHandler,
	postSignupHandler,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/signup', getSignupHandler);
authRouter.post('/signup', postSignupHandler);
authRouter.get('/login', getLoginHandler);

export default authRouter;
