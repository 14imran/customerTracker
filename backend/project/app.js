const express = require('express')
const app = express()
const mongoose = require('mongoose')
//ensure database is connected
var path = require('path')
require('./config/database.config')
require('dotenv').config()

//A library that helps us log the requests in the console
const logger = require('morgan')
app.use(logger('dev'))

const cors = require('cors')
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)

const cookieParser = require('cookie-parser')
app.use(cookieParser())

//Use body parser. To be able parse post request information
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json()) //crucial for post requests from client

//Register routes
const customerRoutes = require('./routes/index.js')
app.use('/api', customerRoutes)

//Start the server to begin listening on a port
// make sure you don't run it on port 3000 because
// your react app uses port 3000.
app.listen(process.env.PORT || 5000, '0.0.0.0', () => {
  console.log('Server is running')
})
