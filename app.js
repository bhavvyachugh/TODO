import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import path from 'path';

import authRouter from './routes/auth.routes.js';

config();

const app = express();

app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.static(path.resolve('static'))); // to tell express where static files are present
app.set('view engine', 'ejs'); // to tell express which view template engine to use
app.set('views', path.resolve('views')); // to tell express where views are present

/* --------------------------------- routes --------------------------------- */

app.use(authRouter);

//TODO: create 404 page

mongoose.connect(process.env.DB_URI, () => {
	console.log('connected to DB');

	app.listen(8000);
});
