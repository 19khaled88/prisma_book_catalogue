import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../shared/sendResponse";
import { UserService } from "./services";

const signUpController = async (req: Request, res: Response) => {
	const result = await UserService.signUpServices(req.body);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "User created successfully",
		data: result,
	});
};

const signInController = async (req: Request, res: Response) => {
	const result = await UserService.signInServices(req.body);
	// sendResponse(res,{
	//     statusCode:httpStatus.OK,
	//     success:true,
	//     message:'Sign In successful',
	//     data:result
	// })
	res.send({
		success: true,
		statusCode: 200,
		message: "User signin successfully",
		token: result?.token,
	});
};

const getAllUsersController = async (req: Request, res: Response) => {
	const result = await UserService.getAllUsers();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Users retrieved successfully",
		data: result,
	});
};

const getSingleUserController = async (req: Request, res: Response) => {
	const result = await UserService.getSingleUser(req.params.id);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "User getched successfully",
		data: result,
	});
};

export const UserController = {
	signUpController,
	signInController,
	getAllUsersController,
	getSingleUserController,
};
