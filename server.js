import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello, World!!",
  });
});

const PORT = 8080;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
