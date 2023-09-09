import express from "express";
import { OrderController } from "./controller";
import authCheck from "../../middleware/auth";
const router = express.Router();

router.post(
  "/orders/create-order",
  authCheck("customer"),
  OrderController.createOrderController
);
router.get(
  "/orders/:orderId",
  authCheck("customer", "admin"),
  OrderController.singleOrdercontroller
);
router.get(
  "/orders",
  authCheck("customer", "admin"),
  OrderController.allOrderController
);
export default router;
