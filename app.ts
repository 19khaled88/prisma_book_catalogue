import express, { Request, Response } from "express";
import BookRoutes from "./src/modules/book/routes";
import CategoryRoutes from "./src/modules/category/routes";
import OrderRoutes from "./src/modules/order/routes";
import UserRoutes from "./src/modules/users/routes";
const app = express();

app.use(express.json());

app.use("/api/v1", UserRoutes);
app.use("/api/v1", CategoryRoutes);
app.use("/api/v1", BookRoutes);
app.use("/api/v1", OrderRoutes);

app.get("/", (req: Request, res: Response) => {
	res.send({ message: "Deployed successfully to Vercel" });
});

export default app;
