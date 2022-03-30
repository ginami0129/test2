import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  res.json({
    msg: "Create a Product",
  });
});

router.get("/", (req, res) => {
  res.json({
    msg: "Show All Product!",
  });
});

router.put("/", (req, res) => {
  res.json({
    msg: "Update a Product",
  });
});

router.delete("/", (req, res) => {
  res.json({
    mag: "Delete a product",
  });
});

export default router;
