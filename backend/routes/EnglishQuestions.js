const express = require('express')
const { 
    getUserId,
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/englishController')

const EnglishRouter = express.Router()

// GET user ID
router.get('/user', getUserId)
// GET base questions
router.get('/english/question', getBaseQuestions)
// POST user response
router.post('/responses', postUserResponse)
//PUT user response
router.put('responses/:id', putUserResponse)
// POST the score  
router.post('/english/score', postCalculatedScore)
// DELETE documents associated with user
router.delete('/responses', deleteUserDocuments)

module.exports = EnglishRouter