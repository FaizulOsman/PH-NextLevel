import express, { Application } from "express";

const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/user.route";

// using cors
import cors from "cors";

// using cors
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// parse data
app.use(express.json());

app.use("/api/v1/user", userRoutes);

export default app;
