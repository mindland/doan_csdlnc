import express from "express";
const productRepository = require("../repositories/productRepository");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const router = express.Router();

router.post("/create-product", jsonParser, async (req, res) => {
  try {
    productRepository.createProduct(req, res);
  } catch (error) {
    res.status(500).send({ message: "Fail to send request" });
  }
});

router.get("/get-products", jsonParser, async (req, res) => {
  try {
    productRepository.getProducts(req, res);
  } catch (error) {
    res.status(500).send({ message: "Fail to send request" });
  }
});

export default router;
