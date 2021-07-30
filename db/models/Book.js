const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const book = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    }
},
    {
        collection: "books",
        timestamps: false
    }
)

module.exports = mongoose.model('Book', book)