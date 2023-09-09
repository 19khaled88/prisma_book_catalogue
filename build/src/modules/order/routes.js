"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const router = express_1.default.Router();
router.post("/orders/create-order", (0, auth_1.default)("customer"), controller_1.OrderController.createOrderController);
router.get("/orders/:orderId", (0, auth_1.default)("customer", "admin"), controller_1.OrderController.singleOrdercontroller);
router.get("/orders", (0, auth_1.default)("customer", "admin"), controller_1.OrderController.allOrderController);
exports.default = router;
