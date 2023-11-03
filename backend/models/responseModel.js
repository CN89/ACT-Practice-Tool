const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userResponseSchema = new Schema({
  userId: {
    type: String,
  },
  baseQuestionId: {
    type: String,
  },
  response: {
    type: String,
  }
})

module.exports = mongoose.model('UserResponse', userResponseSchema)