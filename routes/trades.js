const express = require('express');
const router = express.Router();

const Trades = require("../models/trades");

router.get("/", function (req, res, next) {
	Trades.findAll({}).then((trades) => {
		res.status(200).json(trades);
	});
});

router.get("/:id", function (req, res, next) {
	Trades.findByPk(req.params.id).then((trade) => {
		if (!trade) {
			res.status(404).send("ID not found");
		} else {
			res.status(200).json(trade);
		}
	});
});

router.post("/", function (req, res, next) {
	Trades.create(req.body).then((trade) => {
		res.status(201).json(trade);
	});
});

router.delete("/:id", function (req, res, next) {
	res.status(405).send("Not allowed");
});

router.put("/:id", function (req, res, next) {
	res.status(405).send("Not allowed");
});

router.patch("/:id", function (req, res, next) {
	res.status(405).send("Not allowed");
});


module.exports = router;
