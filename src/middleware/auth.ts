import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/token";

const authCheck = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	if (!token) {
		return res.status(403).send("A token is required for authentication");
	}

	try {
		const decoded = verifyJwt(token);
		(req.role = decoded.role), (req.userId = decoded.userId);
		if (decoded && decoded.role !== "admin") {
			return res.status(401).send({ message: "you are not authorized" });
		}
	} catch (err) {
		return res.status(401).send("Invalid Token");
	}

	return next();
};
export default authCheck;
