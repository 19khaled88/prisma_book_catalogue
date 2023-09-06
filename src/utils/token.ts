import jwt, { JsonWebTokenError, Secret, SignOptions } from "jsonwebtoken";
import config from "../config/index";
import { Exist } from "../shared/interface";

export const signJwt = (payload: Object, options: SignOptions = {}) => {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_KEY as Secret, {
		...(options && options),
	});
};

export const verifyJwt = <T>(token: string): T  => {
	try {
		return jwt.verify(token, process.env.ACCESS_TOKEN_KEY as Secret) as T;
	} catch (error) {
		throw new Error('Invalid token found')
		
	}
};
