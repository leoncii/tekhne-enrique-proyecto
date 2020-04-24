const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'users',
  },
  comidas: String,
  calorias: String,
  ejercicios:String,
  date: Date,
})

const model = mongoose.model('customs', mySchema)
module.exports = model
