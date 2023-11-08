const mongoose = require('mongoose')

const Schema = mongoose.Schema


const questionSchema = new Schema({
  passage: String,

  data: {
    imageName: String,
    binary: String,
  },

  questions: [
    {
    questionNumber: String,
    askText: String,
    answerPrompts: [String],
    correctAnswer: String,
    },
  ],
})

module.exports = mongoose.model('ScienceQuestion', questionSchema)
