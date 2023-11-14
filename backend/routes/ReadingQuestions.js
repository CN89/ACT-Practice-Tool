const express = require('express')
const { 
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/readingController')
const ReadingRouter = express.Router()

// GET base questions
ReadingRouter.get('/reading/question', getBaseQuestions)
// POST user response
ReadingRouter.post('/responses', postUserResponse)
//PUT user response
ReadingRouter.put(`responses/:id`, putUserResponse)
// POST the score  
ReadingRouter.post('/reading/score', postCalculatedScore)
// DELETE documents associated with user
ReadingRouter.delete('/responses', deleteUserDocuments)

module.exports = ReadingRouter