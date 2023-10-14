const mongoose = require('mongoose')

const Schema = mongoose.Schema


const questionSchema = new Schema({
  passage: {
    required: true,
    title: String,
    type: String,
  },
  askText: String,
  answerPrompts: [String],
  correctAnswer: String,
  response: {
    type: String,
  },
  userId: {
    required: true,
    type: String,
  }
})

module.exports = mongoose.model('EnglishQuestion', questionSchema)
