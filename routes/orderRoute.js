import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "Show orders",
  });
});

router.post("/", (req, res) => {
  res.json({
    msg: "Create a order",
  });
});

router.put("/", (req, res) => {
  res.json({
    msg: "Update a order",
  });
});

router.delete("/", (req, res) => {
  res.json({
    msg: "Delete a order",
  });
});

export default router;
