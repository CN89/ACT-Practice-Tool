require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')
const questionRoutes = require('./routes/questions')

// Generate a random unique ID using UUID
const uniqueId = uuidv4()

// Creating the express app
const app = express()

// Middleware
app.use(express.json())

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

// GET user identifier and store in session
app.get('/', (req, res) => {
    if (!req.session.userId) {
        req.session.userId = uniqueId
    }
    res.send('Welcome to the website. Your unique user ID is: ' + req.session.userId);
})

// Routes
app.use('/api/questions', questionRoutes)

// Connecting to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT)
        console.log('listening on port', process.env.PORT)
    })
    .catch((error) => {
        console.log(error)
    })


