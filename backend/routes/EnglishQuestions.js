const express = require('express')
const { 
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/englishController')
const EnglishRouter = express.Router()

// GET base questions
EnglishRouter.get('/english/question', getBaseQuestions)
// POST user response
EnglishRouter.post('/responses', postUserResponse)
//PUT user response
EnglishRouter.put(`responses/:id`, putUserResponse)
// POST the score  
EnglishRouter.post('/english/score', postCalculatedScore)
// DELETE documents associated with user
EnglishRouter.delete('/responses', deleteUserDocuments)

module.exports = EnglishRouter