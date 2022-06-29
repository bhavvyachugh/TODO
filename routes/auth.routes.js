import { Router } from 'express';
import {
	getLoginHandler,
	getSignupHandler,
	postLoginHandler,
	postSignupHandler,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.get('/signup', getSignupHandler);
authRouter.post('/signup', postSignupHandler);

authRouter.get('/login', getLoginHandler);
authRouter.post('/login', postLoginHandler);

export default authRouter;
