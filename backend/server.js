require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const bookRoutes = require("./routes/books");


const app = express();



app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})

app.use('/api/books', bookRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 