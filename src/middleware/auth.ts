import { NextFunction, Request, Response } from "express";
import { verifyJwt } from "../utils/token";
import { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import { IAuthType, IGetUserAuthVerifiedRequest } from "../shared/interface";
import httpStatus from "http-status";

// const authCheck = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(403).send("A token is required for authentication");
//   }

//   try {
//     const decoded = verifyJwt(token);
//     (req.role = decoded.role), (req.userId = decoded.userId);
//     if (decoded && decoded.role !== "admin") {
//       return res.status(401).send({ message: "you are not authorized" });
//     }
//   } catch (err) {
//     return res.status(401).send("Invalid Token");
//   }

//   return next();
// };

const authCheck =
	(...role: string[]) =>
	(req: Request, res: Response, next: NextFunction) => {
		try {
			const token = req.headers.authorization;

			if (!token) {
				return res.status(403).send("A token is required for authentication");
			}

      const decoded: IAuthType = verifyJwt(token);
      if (role.length && !role.includes(decoded.role)) {
        throw new Error("This user is not authorized");
      }
      req.userNeededId = decoded.userId
      req.userRole = decoded.role
      next();
    } catch (error) {
      if (error instanceof Error) {
        return res
          .status(httpStatus.FORBIDDEN)
          .send({ Warning: error.message });
      }
    }
  };
export default authCheck;
