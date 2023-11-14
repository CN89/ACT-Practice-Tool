require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const EnglishRoutes = require('./routes/EnglishQuestions')
const MathRoutes = require('./routes/MathQuestions')
const ReadingRoutes = require('./routes/ReadingQuestions')
const ScienceRoutes = require('./routes/ScienceQuestions')
const fs = require('fs');
const pdf = require('pdf-parse');
const Question = require('./models/englishModel'); // Import your Question model
const { parse } = require('path')
const { PDFDocument } = require('pdf-lib');
const EnglishQuestion = require('./models/englishModel')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const EnglishQuestion = require('./models/englishModel')

// Creating the express app
const app = express()

// Middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Creating session
app.use(session ({
secret: process.env.SECRET,
resave: false,
saveUninitialized: true,
}))

app.get('/', (req, res) => {
    const uniqueId = uuidv4()
    if (!req.session.userId) {
        req.session.userId = uniqueId
    }
    res.json(req.session.userId)
})


// Routes
app.use('/api', EnglishRoutes, MathRoutes, ReadingRoutes, ScienceRoutes)

// Connecting to the database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT)
        console.log('listening on port', process.env.PORT)
    })
    .catch((error) => {
        console.log(error)
    })

mongoose.connection.on('connected', () => {

})

async function addDoc() {
    try {
        const newQuestion = new EnglishQuestion({
            passage: {
                title: dfaf,
                passageText: "charlie is green but not blue",
            },
            questionSet: {
                question: {
                    questionNumber: ag,
                    askText: ahf,
                    answerPrompts: agg,
                    correctAnswer:  adhjs,
                }            
            },
        })
        
        await newQuestion.save()
        console.log('Inserted Succesfully')
    } catch (error) {
        console.log('Error inserting:', error)
        throw error
    }
}
