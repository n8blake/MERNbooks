const mongoose = require("mongoose");
const dotenv = require('dotenv');

const db = mongoose.connect(`mongodb+srv://nathan:password1234@cluster0.dfgvs.mongodb.net/googleBooks?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(() => console.log("MongoDB Database is Connected"))
    .catch((err) => console.log(`An error has occured in DB connection: ${err}`))

module.exports = db;