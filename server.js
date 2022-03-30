import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();

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
  });
});

const PORT = 8080;
console.log(process.env.TEST);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
