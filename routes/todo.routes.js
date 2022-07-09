import { Router } from 'express';
import {
	getHomeHandler,
	postTodoHandler,
} from '../controllers/todo.controller.js';

const todoRouter = Router();

todoRouter.get('/', getHomeHandler);
todoRouter.post('/todo', postTodoHandler);

export default todoRouter;
