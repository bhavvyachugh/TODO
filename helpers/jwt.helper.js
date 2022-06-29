import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

export const generateJwt = payload => {
	const token = jwt.sign(payload, process.env.JWT_SECRET);

	return token;
};
