import express from "express";
import { BookController } from "./controller";
import authCheck from "../../middleware/auth";

const router = express.Router();

router.post(
	"/books/create-book",
	authCheck('admin'),
	BookController.createBookController
);
router.delete("/books/:id", authCheck('admin'), BookController.deleteBookController);
router.put("/books/:id", authCheck('admin'), BookController.updateBookController);
router.get("/books/:id", BookController.singleBookController);
router.get("/books", BookController.getAllBookController);
export default router;
