"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/categories/create-category", (0, auth_1.default)('admin'), controller_1.CategoryController.categoryCreateController);
router.get("/categories/:id", controller_1.CategoryController.singleCategoryController);
router.put("/categories/:id", (0, auth_1.default)('admin'), controller_1.CategoryController.updateCategoryController);
router.delete("/categories/:id", (0, auth_1.default)('admin'), controller_1.CategoryController.deleteCategoryController);
router.get("/categories", controller_1.CategoryController.allCategoryController);
exports.default = router;
