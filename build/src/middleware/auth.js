"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = require("../utils/token");
const http_status_1 = __importDefault(require("http-status"));
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
const authCheck = (...role) => (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decoded = (0, token_1.verifyJwt)(token);
        if (role.length && !role.includes(decoded.role)) {
            throw new Error("This user is not authorized");
        }
        req.userNeededId = decoded.userId;
        req.userRole = decoded.role;
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            return res
                .status(http_status_1.default.FORBIDDEN)
                .send({ Warning: error.message });
        }
    }
};
exports.default = authCheck;
