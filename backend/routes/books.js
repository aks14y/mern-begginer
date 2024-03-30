const express = require("express");
const { books_all } = require("../controllers/booksController");

const router = express.Router();

router.get("/", books_all);

module.exports = router