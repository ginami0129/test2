import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectedDB from "./config/database.js";
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";

dotenv.config();

const app = express();

connectedDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello, World!!",
    status: mongoose.connection.readyState,
  });
});

app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
