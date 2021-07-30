const express = require('express')
const { Book } = require('../db/models')
const router = express.Router()

router.get('/books', async (req, res) => {
    Book.find({}, function(err, docs) {
        if (err) {
            console.log(`Error: ${err}`)
            res.status(400).send("and error occurred")
        }
        else {
            res.status(200).json({data: docs})
        }
    })
    // res.send("hello get")
 })

router.post('/books', (req, res) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const book  = new Book(req.body);
    book.save(function (err) {
        if (err) {
            res.status(400).send(`An error occurred: ${err}`)
        }

        else {
            res.status(200).json({data: "Data was saved"})
        }
    })
    // res.send("hello post")
 })

router.delete('/books/:id', (req, res) => {
    console.log("Delete Id:", req.body._id);
    Book.findByIdAndDelete(req.body._id, (err) => { 
        if (err) {
            console.log(`Error occurred: ${err}`)
            res.status(400).send("Error occurred")
        } else {
            res.status(200).json({Sucess: "Item Deleted"})
        }
     })
    // res.send("hello delete")
})

module.exports = router;