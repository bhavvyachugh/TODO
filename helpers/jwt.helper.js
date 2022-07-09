import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

export const generateJwt = payload => {
	const token = jwt.sign(payload, process.env.JWT_SECRET);

	return token;
};

export const verifyJwt = token => {
	try {
		const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

		return verifiedToken;
	} catch (err) {
		return null;
	}
};
