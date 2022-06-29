import User from '../models/user.model.js';
import { hash, genSalt, compare } from 'bcrypt';
import { generateJwt } from '../helpers/jwt.helper.js';

export const getSignupHandler = (req, res) => {
	res.render('signup');
};

export const postSignupHandler = async (req, res) => {
	try {
		const { name, email, phone, password, cpassword } = req.body;

		// check if password and cpassword are same
		//TODO: Show errors on frontend
		if (password !== cpassword) {
			return res
				.status(400)
				.send('password and confirm password are not the same');
		}

		// check if user with same email already exists
		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(409).send('User with same email already exists');
		}

		const salt = await genSalt(10);

		const hashedPassword = await hash(password, salt);

		const user = await User.create({
			name,
			email,
			phone,
			password: hashedPassword,
		});

		const token = generateJwt({ id: user._id });

		res
			.cookie('token', token, {
				httpOnly: true,
				secure: true,
			})
			.redirect('/');
	} catch (err) {
		return res.status(500).send(err);
	}
};

export const getLoginHandler = (req, res) => {
	res.render('login');
};

export const postLoginHandler = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user) return res.status(404).send('User not found');

	const isPasswordCorrect = await compare(password, user.password);

	if (!isPasswordCorrect)
		return res.status(401).send('password is not correct');

	const token = generateJwt({ id: user._id });

	res
		.cookie('token', token, {
			httpOnly: true,
			secure: true,
		})
		.redirect('/');
};

export const getLogoutHandler = (req, res) => {
	res.clearCookie('token').redirect('/');
};
