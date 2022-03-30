import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
console.log("DB!");
await mongoose.connect(process.env.MONGODB_URL);
console.log("Connected!");

const corsOptions = {
  methods: "*",
  allowedHeaders: "Content-Type, Accept",
};

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

const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
