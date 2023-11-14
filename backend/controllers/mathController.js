const MathQuestion = require('../models/englishModel')
const UserResponse = require('../models/responseModel')


// GET random question
const getBaseQuestions = async (req, res) => {
  try {
    // Count the total number of documents in the collection
    const count = await MathQuestion.countDocuments();
    
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * count);

    // Use aggregation to find a random document
    const randomQuestion = await MathQuestion.aggregate([
      { $skip: randomIndex },
      { $limit: 1 }
    ]);

    // The result is an array, so take the first element
    const randomQuestionData = randomQuestion[0];

    res.status(200).json(randomQuestionData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

  

// POST user response
const postUserResponse = async (req, res) => {
    const { response, userId, baseQuestionId } = req.body
  
    try {
      newDocument = await UserResponse.create({ response, userId, baseQuestionId })
      res.status(200).json(newDocument)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// PUT user response
const putUserResponse = async (req, res) => {
  const _id = req.params.id
  const { response } = req.body
  
  try {
    // Use the _id to find and update the document in your database
    const updatedDocument = await UserResponse.findByIdAndUpdate(_id, { response }, { new: true });

    if (!updatedDocument) {
      return res.status(404).json({ error: "Document not found" });
    }

    res.status(200).json(updatedDocument);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
  


// DELETE all documents when a user finishes an exam
const deleteUserDocuments = async (req, res) => {
    const userId = getUserId(req)
    if (!userId) {
      return res.status(400).json({error: 'User ID not found in the session.'})
    }
    // Delete all documents with userId
    UserResponse.deleteMany({ userId }, (err) => {
      if (err) {
        console.error('Error:', err)
        return res.status(400).json({error: err.message})
      } else {
        console.log('Documents with userID have been deleted')
        return res.status(200).json({message: 'Documents with userID have been deleted'})
      }
    })
}
  

// Calculate score
const postCalculatedScore = async (req,res) => {
    // Declare userId
    const userId = getUserId()
    try {
        // GET all documents with userId
        const documents = await UserResponse.find({ userId })

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
    getBaseQuestions,
    postUserResponse,
    putUserResponse,
    postCalculatedScore,
    deleteUserDocuments
}