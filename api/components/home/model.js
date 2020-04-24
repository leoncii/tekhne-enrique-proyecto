const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
  user: String,
  pass: String,
  twitter: String,
  facebook: String,
  gmail: String,
  date: Date,
  img: { data: Buffer, contentType: String },
})

const model = mongoose.model('users', mySchema)
module.exports = model
