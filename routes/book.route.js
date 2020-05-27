const express = require("express");
const controller = require("../controllers/book.controller");
const router = express.Router();

router.get("/books", controller.index);

module.exports = router;