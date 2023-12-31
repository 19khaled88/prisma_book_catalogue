"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const services_1 = require("./services");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.OrderSerivce.createOrderService(req.body, req.userNeededId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Order created successfully",
        data: result,
    });
});
const allOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.OrderSerivce.allOrderService(req.userNeededId, req.userRole);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Orders retrieved successfully",
        data: result,
    });
});
const singleOrdercontroller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.OrderSerivce.singleOrderService(req.params.orderId);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Order fetched successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.BAD_REQUEST,
                success: false,
                message: "Order not fetched successfully",
                data: error.message,
            });
        }
    }
});
exports.OrderController = {
    createOrderController,
    allOrderController,
    singleOrdercontroller
};
