const mongoose = require('mongoose')
require('dotenv').config()
// We connect to our local database here called `todos`
let configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
let MONGODB_URI = process.env.MONGODB_URI
  

mongoose
  .connect(MONGODB_URI, configOptions)
  .then(() => {
    console.log('Yayyy Database "Glasco" is connected')
  })
  .catch(() => {
    console.log('Something went wrong DB!')
  })
