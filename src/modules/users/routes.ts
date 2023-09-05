import express from "express";
import { UserController } from "./controller";
import authCheck from "../../middleware/auth";
const router = express.Router();

router.post("/auth/signup", UserController.signUpController);
router.post("/auth/signin", UserController.signInController);
router.get("/users/:id", authCheck, UserController.getSingleUserController);
router.delete("/users/:id", authCheck, UserController.deleteUserControler);
router.put("/users/:id", authCheck, UserController.updateUserController);
router.get("/users", authCheck, UserController.getAllUsersController);

export default router;
