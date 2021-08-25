import express from "express";
const userRepository = require("../repositories/productRepository");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const router = express.Router();

router.post("/create-product", jsonParser, async (req, res) => {
    try {
        userRepository.createProduct(req, res);
    } catch (error) {
        res.status(500).send({ message: "Fail to send request" });
    }
});

export default router;