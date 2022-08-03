import { Router } from 'express';
import {
	getLoginHandler,
	getLogoutHandler,
	getSignupHandler,
	postLoginHandler,
	postSignupHandler,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.route('/signup').get(getSignupHandler).post(postSignupHandler);

authRouter.route('/login').get(getLoginHandler).post(postLoginHandler);

authRouter.route('/logout').get(getLogoutHandler);

export default authRouter;
