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
exports.CategoryController = void 0;
const services_1 = require("./services");
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const categoryCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.CategoryService.categoryCreateService(req.body);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Category created successfuly",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.BAD_REQUEST,
                success: false,
                message: "Category not created successfully",
                data: error.message,
            });
        }
    }
});
const allCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.CategoryService.allCategoryService();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Categories fetched successfully",
        data: result,
    });
});
const singleCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.CategoryService.singleCategoryService(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category fetched successfully",
        data: result,
    });
});
const updateCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield services_1.CategoryService.updateCategoryService(req.params.id, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Category updated successfully",
        data: result,
    });
});
const deleteCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield services_1.CategoryService.deleteCategoryService(req.params.id);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Category deleted successfully",
            data: result,
        });
    }
    catch (error) {
        if (error instanceof Error) {
            (0, sendResponse_1.default)(res, {
                statusCode: http_status_1.default.UNAUTHORIZED,
                success: false,
                message: "Category not deleted successfully",
                data: error.message,
            });
        }
    }
});
exports.CategoryController = {
    categoryCreateController,
    allCategoryController,
    singleCategoryController,
    updateCategoryController,
    deleteCategoryController,
};
