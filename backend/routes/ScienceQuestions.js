const express = require('express')
const { 
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/scienceController')
const ScienceRouter = express.Router()

// GET base questions
ScienceRouter.get('/science/question', getBaseQuestions)
// POST user response
ScienceRouter.post('/responses', postUserResponse)
//PUT user response
ScienceRouter.put(`responses/:id`, putUserResponse)
// POST the score  
ScienceRouter.post('/science/score', postCalculatedScore)
// DELETE documents associated with user
ScienceRouter.delete('/responses', deleteUserDocuments)

module.exports = ScienceRouter 