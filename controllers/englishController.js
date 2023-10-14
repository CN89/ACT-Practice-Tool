const EnglishQuestion = require('../models/englishModels')
const mongoose = require('mongoose')

// GET userId from session
const getUserId = (req,res) => {
    const userId = req.session.uniqueId
    if (userId) {
        res.status(200).json(userId)
    } else {
        console.log('Unique ID not found in the session.')
    }
}

// GET sample questions to display
const getBaseQuestions = async (req, res) => {
    // Select random question
    EnglishQuestion.aggregate([{ $sample: { size: 1 } }])
        .exec((err, randomQuestions) => {
            if (err) {
            console.error(err);
            return res.status(500).send('Error fetching random question')
            }
            if (randomQuestions.length === 0) {
            return res.status(404).send('No questions found')
            }

            // Send randomly selected question as JSON
            res.status(200).json(randomQuestions[0])
        });
}

// POST user response
const postUserResponse = async (req, res) => {
    // Declaring the user's response and userId
    const { response } = req.body
    const { userId } = getUserId()
    // Creating new doc and adding to db 
    try {
        const newEnglishDoc = await EnglishQuestion.create({ 
            response: response,
            userId: userId,
        })
        res.status(200).json(newEnglishDoc)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// DELETE all documents when a user finishes an exam
const deleteUserDocuments = async (req, res) => {
    // GET all documents with userId and DELETE documents
    EnglishQuestion.deleteMany(getUserId(), (err) => {
        if (err) {
          console.error('Error:', err);
          // Handle the error if needed
        } else {
          console.log('Documents with userID have been deleted')
        }
    })
}

// Calculate score
const postCalculatedScore = async (req,res) => {
    // Declare userId
    const userId = getUserId()
    try {
        // GET all documents with userId
        const documents = await EnglishQuestion.find({ userId })

        if (!documents || documents.length === 0) {
            return res.status(404).json({ message: 'No documents found for this user.' });
        }
        // For each document check if response equals answer
        let correctCount = 0;

        for (const document of documents) {
        if (document.response === document.correctAnswer) {
            correctCount++;
        }
        }
        // Score is number of correct responses / number of documents
        const percentageCorrect = (correctCount / documents.length) * 100

        res.status(200).json(percentageCorrect)
    } catch (error) {
        res.status(500).json({ erorr: error.message })
    }
}
    
module.exports = {
    getUserId,
    getBaseQuestions,
    postUserResponse,
    postCalculatedScore,
    deleteUserDocuments
}