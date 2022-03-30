import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import connectedDB from "./config/database.js";

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

app.post("/api/products/", (req, res) => {
  res.json({
    msg: "Create a Product",
  });
});

app.get("/api/products/", (req, res) => {
  res.json({
    msg: "Show All Product!",
  });
});

app.put("/api/products/", (req, res) => {
  res.json({
    msg: "Update a Product",
  });
});

app.delete("/api/products/", (req, res) => {
  res.json({
    mag: "Delete a product",
  });
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
