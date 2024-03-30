const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    pages: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    genres: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Books = mongoose.model("books", booksSchema);
module.exports = Books;
