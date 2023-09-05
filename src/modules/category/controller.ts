import { Request, Response } from "express";
import { CategoryService } from "./services";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const categoryCreateController = async (req: Request, res: Response) => {
	try {
		const result = await CategoryService.categoryCreateService(req.body);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Category created successfuly",
		data: result,
	});
	} catch (error) {
		sendResponse(res, {
			statusCode: httpStatus.BAD_REQUEST,
			success: false,
			message: "Category not created successfully",
			data: error?.message,
		});
	}
	
};

const allCategoryController = async (req: Request, res: Response) => {
	const result = await CategoryService.allCategoryService();
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Categories fetched successfully",
		data: result,
	});
};

const singleCategoryController = async (req: Request, res: Response) => {
	const result = await CategoryService.singleCategoryService(req.params.id);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Category fetched successfully",
		data: result,
	});
};

const updateCategoryController = async (req: Request, res: Response) => {
	const result = await CategoryService.updateCategoryService(
		req.params.id,
		req.body
	);
	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Category updated successfully",
		data: result,
	});
};

const deleteCategoryController = async (req: Request, res: Response) => {
	try {
		const result = await CategoryService.deleteCategoryService(req.params.id);
		sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: "Category deleted successfully",
			data: result,
		});
	} catch (error) {
		sendResponse(res, {
			statusCode: httpStatus.UNAUTHORIZED,
			success: false,
			message: "Category not deleted successfully",
			data: error?.message,
		});
	}
};

export const CategoryController = {
	categoryCreateController,
	allCategoryController,
	singleCategoryController,
	updateCategoryController,
	deleteCategoryController,
};
