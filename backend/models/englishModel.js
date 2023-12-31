const mongoose = require('mongoose')

const Schema = mongoose.Schema


const questionSchema = new Schema({
  passage: {
    title: String,
    passageText: String
  },

  questionSet: [{
    question: {
      questionNumber: String,
      askText: String,
      answerPrompts: [String],
      correctAnswer: String,
    },
  }],
})

module.exports = mongoose.model('EnglishQuestion', questionSchema)
