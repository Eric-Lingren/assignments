const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan')

// Middleware
app.use(express.json()) 
app.use(morgan('dev'))

// Server Route(s)
app.use('/inventory', require('./routes/inventory'))


// Database Connect                         // name of db on local hard drive
mongoose.connect('mongodb://localhost:27017/mydatabase', {useNewUrlParser: true}, () => {
    console.log("connected to the db")
})


// Server 
app.listen(8000, () => {
    console.log(`[+] Server is running on port 8000`)
})

