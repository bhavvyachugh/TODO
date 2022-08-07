import { Router } from "express";
import {
  deleteTodoHandler,
  getHomeHandler,
  postTodoHandler,
  updateTodoHandler,
} from "../controllers/todo.controller.js";

const todoRouter = Router();

todoRouter.get("/", getHomeHandler);
todoRouter.post("/todo", postTodoHandler);
todoRouter.post("/todo/delete/:id", deleteTodoHandler);
todoRouter.post("/todo/update/:id", updateTodoHandler);

export default todoRouter;
