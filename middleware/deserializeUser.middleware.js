import { verifyJwt } from '../helpers/jwt.helper.js';

const deserializeUser = (req, res, next) => {
	const { token } = req.cookies;
	let decoded;

	if (token) {
		decoded = verifyJwt(token);
	} else {
		return next();
	}

	if (!decoded) return next();

	res.locals.user = decoded.id;

	next();
};

export default deserializeUser;
