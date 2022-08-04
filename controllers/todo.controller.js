import Todo from '../models/todo.model.js';
import User from '../models/user.model.js';

export const getHomeHandler = async (req, res) => {
	const loggedInUserId = res.locals.user;

	const user = await User.findById(loggedInUserId).populate('tasks');

	res.render('home', {
		isUserLoggedIn: res.locals.user ? true : false,
		todos: user && user.tasks.length > 0 ? user.tasks : [],
	});
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

export const deleteTodoHandler = async (req, res) => {
	const { id } = req.params;

	try {
		await Todo.findByIdAndDelete(id);

		const userId = res.locals.user;

		const userFromDB = await User.findById(userId);

		const filteredTasks = userFromDB.tasks.filter(
			task => task.toString() !== id
		);

		userFromDB.tasks = filteredTasks;
		userFromDB.save();

		res.redirect('/');
	} catch (err) {
		res.status(500).send(err);
	}
};
