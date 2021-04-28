const mongoose = require('mongoose')
require('dotenv').config()
// We connect to our local database here called `todos`
let configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
let MONGODB_URI =
  'mongodb+srv://imran:abc12345678@cluster0.fhlcu.mongodb.net/Glasco?retryWrites=true&w=majority'

mongoose
  .connect(MONGODB_URI, configOptions)
  .then(() => {
    console.log('Yayyy Database "Glasco" is connected')
  })
  .catch(() => {
    console.log('Something went wrong DB!')
  })
