import express, { Request, Response } from "express";
import { UserController } from "./controller";

const router = express.Router();

router.post("/auth/signin", UserController.signInUserController);
router.post("/auth/signup", UserController.signUpUserController);

export default router;
