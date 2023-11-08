const express = require('express')
const { 
    getUserId,
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/scienceController')

const ScienceRouter = express.Router()

// GET user ID
router.get('/user', getUserId)
// GET base questions
router.get('/science/question', getBaseQuestions)
// POST user response
router.post('/responses', postUserResponse)
//PUT user response
router.put('responses/:id', putUserResponse)
// POST the score  
router.post('/science/score', postCalculatedScore)
// DELETE documents associated with user
router.delete('/responses', deleteUserDocuments)

module.exports = ScienceRouter 