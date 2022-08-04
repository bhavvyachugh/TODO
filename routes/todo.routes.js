import { Router } from 'express';
import {
	deleteTodoHandler,
	getHomeHandler,
	postTodoHandler,
} from '../controllers/todo.controller.js';

const todoRouter = Router();

todoRouter.get('/', getHomeHandler);
todoRouter.post('/todo', postTodoHandler);
todoRouter.post('/todo/delete/:id', deleteTodoHandler);

export default todoRouter;
