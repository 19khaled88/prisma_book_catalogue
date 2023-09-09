import express, { Request, Response } from "express";
import BookRoutes from "./modules/book/routes";
import CategoryRoutes from "./modules/category/routes";
import OrderRoutes from "./modules/order/routes";
import UserRoutes from "./modules/users/routes";
const app = express();

app.use(express.json());

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", BookRoutes);
app.use("/api/v1", OrderRoutes);

app.get("/test", (req: Request, res: Response) => {
	res.send({ message: "successful" });
});

export default app;
