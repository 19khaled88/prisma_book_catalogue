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
exports.BookController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const services_1 = require("./services");
const createBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.BookService.createBookService(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Book created successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.UNAUTHORIZED,
                success: false,
                message: "Book not created successfully",
                data: error.message,
            });
        }
    }
});
const getAllBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.BookService.getAllBookService();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Books fetched successfully",
        data: result,
    });
});
const singleBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.BookService.singleBookService(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Book fetched successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.BAD_REQUEST,
                success: false,
                message: "Book not fetched successfully",
                data: error.message,
            });
        }
    }
});
const updateBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.BookService.updateBookService(req.params.id, req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Book updated successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.UNAUTHORIZED,
                success: false,
                message: "Book not updated successfully",
                data: error.message,
            });
        }
    }
});
const deleteBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.BookService.deleteBookService(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Book deleted successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.UNAUTHORIZED,
                success: false,
                message: "Book not deleted successfully",
                data: error.message,
            });
        }
    }
});
exports.BookController = {
    createBookController,
    singleBookController,
    getAllBookController,
    updateBookController,
    deleteBookController,
};
