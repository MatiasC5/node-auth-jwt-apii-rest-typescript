import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

import express from "express";

const app = express();

app.use(express.json());

//Routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
//Usuario

export default app;
