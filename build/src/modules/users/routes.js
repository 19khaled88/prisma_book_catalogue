"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/auth/signup", controller_1.UserController.signUpController);
router.post("/auth/signin", controller_1.UserController.signInController);
router.get("/users/:id", (0, auth_1.default)('admin'), controller_1.UserController.getSingleUserController);
router.delete("/users/:id", (0, auth_1.default)('admin'), controller_1.UserController.deleteUserControler);
router.put("/users/:id", (0, auth_1.default)('admin'), controller_1.UserController.updateUserController);
router.get("/users", (0, auth_1.default)('admin'), controller_1.UserController.getAllUsersController);
exports.default = router;
