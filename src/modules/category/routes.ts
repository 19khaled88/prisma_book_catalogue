import express from "express";
import { CategoryController } from "./controller";
import authCheck from "../../middleware/auth";

const router = express.Router();

router.post(
	"/categories/create-category",
	authCheck,
	CategoryController.categoryCreateController
);
router.get("/categories/:id", CategoryController.singleCategoryController);
router.put(
	"/categories/:id",
	authCheck,
	CategoryController.updateCategoryController
);
router.delete(
	"/categories/:id",
	authCheck,
	CategoryController.deleteCategoryController
);
router.get("/categories", CategoryController.allCategoryController);

export default router;
