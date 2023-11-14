const express = require('express')
const { 
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/mathController')
const MathRouter = express.Router()

// GET base questions
MathRouter.get('/math/question', getBaseQuestions)
// POST user response
MathRouter.post('/responses', postUserResponse)
//PUT user response
MathRouter.put(`responses/:id`, putUserResponse)
// POST the score  
MathRouter.post('/math/score', postCalculatedScore)
// DELETE documents associated with user
MathRouter.delete('/responses', deleteUserDocuments)

module.exports = MathRouter