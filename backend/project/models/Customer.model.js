const mongoose = require('mongoose')

let CustomerSchema = new mongoose.Schema({
  name: String,
  address: String,
  age: {
    type: Number,
  },
})

let CustomerModel = mongoose.model('Customer', CustomerSchema)

module.exports = CustomerModel
