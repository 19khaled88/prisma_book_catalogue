import express from "express";
import UserRoutes from "./modules/users/routes";
import CategoryRoutes from "./modules/category/routes";
const app = express();

app.use(express.json());

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CategoryRoutes);

export default app;
