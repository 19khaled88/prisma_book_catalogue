"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/modules/book/routes"));
const routes_2 = __importDefault(require("./src/modules/category/routes"));
const routes_3 = __importDefault(require("./src/modules/order/routes"));
const routes_4 = __importDefault(require("./src/modules/users/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/v1", routes_4.default);
app.use("/api/v1", routes_2.default);
app.use("/api/v1", routes_1.default);
app.use("/api/v1", routes_3.default);
app.get("/test", (req, res) => {
    res.send({ message: "successful" });
});
exports.default = app;
