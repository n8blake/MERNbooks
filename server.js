const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");

const routes = require('./routes')

// Connection to the MongoDB Database
/* const server = require('./server/db'); */  // OR
// require('./database');
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);


const db = mongoose.connect(`mongodb+srv://nathan:password1234@cluster0.dfgvs.mongodb.net/googleBooks?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(() => console.log("MongoDB Database is Connected"))
.catch((err) => console.log(`An error has occured in DB connection: ${err}`))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});