import express from "express";
const shopRepository = require("../repositories/shopRepository");
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
const router = express.Router();

router.post("/sold-product-statistics", jsonParser, async (req, res) => {
    try {
        await shopRepository.getSoldProductStatistics(req, res);
    } catch (error) {
        res.status(500).send({ message: "Fail to send request" });
    }
});

router.get("/monthly-revenue-statistics", jsonParser, async (req, res) => {
    try {
        await shopRepository.getMonthlyRevenueStatistics(req, res);
    } catch (error) {
        res.status(500).send({ message: "Fail to send request" });
    }
})

router.post("/create-shop", jsonParser, async (req, res) => {
    try {
        await shopRepository.createShopUnit(req, res);
    } catch (error) {
        res.status(500).send({ message: "Fail to send request" });
    }
});

export default router;