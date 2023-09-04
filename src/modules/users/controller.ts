import { Request, Response } from "express";
import { UserService } from "./services";

const signUpUserController = async (req: Request, res: Response) => {
	const result = await UserService.singUpUserService(req.body);

	res.send({
		data: result,
	});
};

const signInUserController =async (req:Request,res:Response) => {
    const result = await UserService.singInUserService(req.body)
    res.send({
        data:result
    })
}

export const UserController = {
	signUpUserController,
    signInUserController
};
