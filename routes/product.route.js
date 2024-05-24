//Product router, used for cleaning up index.js

const express = require("express");
const Product = require("../models/product.model.js");
const {
  getProducts,
  getProduct,
  createProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
