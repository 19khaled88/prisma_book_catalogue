import jwt, { SignOptions } from "jsonwebtoken";
import config from "../config/index";

export const signJwt = (payload: Object, options: SignOptions = {}) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
		...(options && options),
	});
};

export const verifyJwt = <T>(token: string): T | null => {
	try {
		return jwt.verify(token, process.env.ACCESS_TOKEN_KEY) as T;
	} catch (error) {
		console.log(error);
		return null;
	}
};
