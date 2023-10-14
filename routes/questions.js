const express = require('express')
const { 
    getUserId,
    getBaseQuestions,
    postUserResponse,
    deleteUserDocuments,
    postCalculatedScore 
} = require('../controllers/englishController')

const router = express.Router()

// GET user ID
router.get('/', getUserId)
// GET base questions
router.get('/', getBaseQuestions)
// POST user response
router.post('/', postUserResponse)
// POST the score  
router.post('/', postCalculatedScore)
// DELETE documents associated with user
router.delete('/', deleteUserDocuments)

module.exports = router