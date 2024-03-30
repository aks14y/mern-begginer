const Books = require("../models/booksModel");

const books_all = async (req, res) => {
  const books = await Books.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

module.exports = { books_all };
