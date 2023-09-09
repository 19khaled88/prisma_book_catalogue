import express from "express";
import { UserController } from "./controller";
import authCheck from "../../middleware/auth";

const router = express.Router();

router.post("/auth/signup", UserController.signUpController);
router.post("/auth/signin", UserController.signInController);
router.get("/users/:id", authCheck('admin'), UserController.getSingleUserController);
router.delete("/users/:id", authCheck('admin'), UserController.deleteUserControler);
router.put("/users/:id", authCheck('admin'), UserController.updateUserController);
router.get("/users", authCheck('admin'), UserController.getAllUsersController);

export default router;
