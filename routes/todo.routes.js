import { Router } from 'express';
import { getHomeHandler } from '../controllers/todo.controller.js';

const todoRouter = Router();

todoRouter.get('/', getHomeHandler);

export default todoRouter;
