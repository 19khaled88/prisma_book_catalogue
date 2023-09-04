import jwt, { SignOptions } from "jsonwebtoken";
import config from "../config/index";

export const signJwt = (
	payload: Object,
	key: "accessTokenPrivateKey" | "refreshTokenPrivateKey",
	options: SignOptions = {}
) => {
	const privateKey = Buffer.from(config[key], "base64").toString("ascii");
	return jwt.sign(payload, privateKey, {
		...(options && options)
	});
};

export const verifyJwt = <T>(
	token: string,
	key: "accessTokenPublicKey" | "refreshTokenPublicKey"
): T | null => {
	try {
		const publicKey = Buffer.from(config[key], "base64").toString("ascii");
		return jwt.verify(token, publicKey) as T;
	} catch (error) {
		console.log(error);
		return null;
	}
};
