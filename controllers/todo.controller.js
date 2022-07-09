import Todo from '../models/todo.model.js';
import User from '../models/user.model.js';

export const getHomeHandler = (req, res) => {
	res.render('home');
};

export const postTodoHandler = async (req, res) => {
	const { title, description } = req.body;
	const loggedInUserId = res.locals.user;

	const newTodo = await Todo.create({
		title,
		description,
	});

	const loggedInUser = await User.findById(loggedInUserId);

	loggedInUser.tasks.push(newTodo._id);

	loggedInUser.save();

	res.redirect('/');
};
