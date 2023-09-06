import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../shared/sendResponse";
import { BookService } from "./services";

const createBookController = async (req: Request, res: Response) => {
  try {
    const result = await BookService.createBookService(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: "Book not created successfully",
        data: error.message,
      });
    }
  }
};

const getAllBookController = async (req: Request, res: Response) => {
  const result = await BookService.getAllBookService();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books fetched successfully",
    data: result,
  });
};

const singleBookController = async (req: Request, res: Response) => {
  try {
    const result = await BookService.singleBookService(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book fetched successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      sendResponse(res, {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Book not fetched successfully",
        data: error.message,
      });
    }
  }
};

const updateBookController = async (req: Request, res: Response) => {
  try {
    const result = await BookService.updateBookService(req.params.id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: "Book not updated successfully",
        data: error.message,
      });
    }
  }
};

const deleteBookController = async (req: Request, res: Response) => {
  try {
    const result = await BookService.deleteBookService(req.params.id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book deleted successfully",
      data: result,
    });
  } catch (error) {
    if (error instanceof Error) {
      sendResponse(res, {
        statusCode: httpStatus.UNAUTHORIZED,
        success: false,
        message: "Book not deleted successfully",
        data: error.message,
      });
    }
  }
};
export const BookController = {
  createBookController,
  singleBookController,
  getAllBookController,
  updateBookController,
  deleteBookController,
};
