import { Request, Response } from "express";
import { OrderSerivce } from "./services";
import sendResponse from "../../shared/sendResponse";
import httpStatus from "http-status";

const createOrderController = async (req: Request, res: Response) => {
  const result = await OrderSerivce.createOrderService(
    req.body,
    req.userNeededId
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created successfully",
    data: result,
  });
};

const allOrderController = async (req: Request, res: Response) => {
  const result = await OrderSerivce.allOrderService(req.userNeededId,req.userRole);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: result,
  });
};

export const OrderController = {
  createOrderController,
  allOrderController,
};
