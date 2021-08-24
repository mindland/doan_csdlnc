import express from "express";
const userRepository = require("../repositories/shopRepository");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const router = express.Router();


router.post("/sold-product-statistics", jsonParser, async (req, res) => {
    try {
        userRepository.getSoldProductStatistics(req, res);
    } catch (error) {
        res.status(500).send({ message: "Fail to send request" });
    }
});

export default router;