const express = require('express')
const router = express.Router()

let CustomerModel = require('../models/Customer.model')

//http://localhost:5000/api/
router.get('/customer', (req, res) => {
  CustomerModel.find()
    .then((customer) => {
      res.status(200).json(customer)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      })
    })
})

router.get('/customer/:id', (req, res) => {
  CustomerModel.findOne({ _id: req.params.id })
    .then((customer) => {
      res.status(200).json(customer)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      })
    })
})

//http://localhost:3000/api/create`
router.post('/create', (req, res) => {
  const { name, address, age } = req.body
  CustomerModel.create({ name, address, age })
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      })
    })
})

router.put('/customer/:id', (req, res) => {
  CustomerModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).json({ message: 'customer removed' })
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      })
    })
})

router.delete('/customer/:id', (req, res) => {
  CustomerModel.findOneAndRemove({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'customer removed' })
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong',
        message: err,
      })
    })
})

module.exports = router
