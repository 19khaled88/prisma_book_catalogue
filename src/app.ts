import express from "express";
import UserRoutes from "./modules/users/routes";
import CategoryRoutes from "./modules/category/routes";
import BookRoutes from "./modules/book/routes";
import OrderRoutes from "./modules/order/routes";
const app = express();

app.use(express.json());

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", BookRoutes);
app.use("/api/v1", OrderRoutes);

export default app;
