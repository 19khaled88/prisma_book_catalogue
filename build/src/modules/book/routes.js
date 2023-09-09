"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/books/create-book", (0, auth_1.default)('admin'), controller_1.BookController.createBookController);
router.delete("/books/:id", (0, auth_1.default)('admin'), controller_1.BookController.deleteBookController);
router.put("/books/:id", (0, auth_1.default)('admin'), controller_1.BookController.updateBookController);
router.get("/books/:id", controller_1.BookController.singleBookController);
router.get("/books", controller_1.BookController.getAllBookController);
exports.default = router;
