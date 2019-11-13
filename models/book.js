const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    key:{type: String, required:true},
    id:{type:String, required:true},
    title: { type: String, required: true },
    author: { type: Array, required: true },
    description: { type: String, default:""},
    image: { type: String, required: true },
    link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
