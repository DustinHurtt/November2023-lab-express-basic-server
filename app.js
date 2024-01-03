// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
require('dotenv').config()

var express = require('express')
var logger = require('morgan')

var apiRouter = require('./routes/api')




// CREATE EXPRESS APP
// Here you should create your Express app:
var app = express()

// Set up the following middleware that you will need for your Express server:
app.use(express.static('public'))
app.use(express.json())
app.use(logger('dev'))

app.use('/api', apiRouter)

app.get('/', (req, res, next) => {

    res.sendFile(__dirname + '/views/home.html')

})

app.get('/blog', (req, res, next) => {

    res.sendFile(__dirname + '/views/blog.html')

})

app.listen(process.env.PORT, () => {
    console.log("Server is listening on " + process.env.PORT)
})
