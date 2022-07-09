import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import deserializeUser from './middleware/deserializeUser.middleware.js';
import authRouter from './routes/auth.routes.js';
import todoRouter from './routes/todo.routes.js';

config();

const app = express();

app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.static(path.resolve('static'))); // to tell express where static files are present
app.set('view engine', 'ejs'); // to tell express which view template engine to use
app.set('views', path.resolve('views')); // to tell express where views are present

app.use(cookieParser());

app.use(deserializeUser);

/* --------------------------------- routes --------------------------------- */

app.use(authRouter);
app.use(todoRouter);

//TODO: create 404 page

mongoose.connect(process.env.DB_URI, () => {
	console.log('connected to DB');

	app.listen(8000);
});
