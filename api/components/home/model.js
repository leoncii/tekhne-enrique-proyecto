const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
  user: String,
  pass: String,
})

const model = mongoose.model('users', mySchema)
module.exports = model
