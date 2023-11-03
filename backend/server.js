require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const questionRoutes = require('./routes/questions')
const fs = require('fs');
const pdf = require('pdf-parse');
const Question = require('./models/englishModel'); // Import your Question model
const { parse } = require('path')
const { PDFDocument } = require('pdf-lib');
const EnglishQuestion = require('./models/englishModel')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

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
    console.log(req.session.userId)
    res.json(req.session.userId)
})


// Routes
app.use('/api/questions', questionRoutes)

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



//const addDocTest = async => {
    //const newQuestion = new EnglishQuestion({
     //   passage: {
     //   title: "The Ants Go Marching",
     //  passageText: "Ants' search for food can require traveling as far as one hundred meters away from their nests (the rough equivalent of' a human walking fifteen miles). [1] Yet no matter how winding a path ants might have taken to find food. They are able to navigate back to their starting point with remarkable precision. To test their scientific hypothesis, a team of 3 research biologists studied ants in the Tunisian desert. [A] The scientists will place food a short distance from the ants' home and then tracked the ants' paths to the food. s [3] The team's first experiment involving relocating the 6 ants after they'd found the food. [B) By moving the ants to a new location, the scientists changed the direction the ants would need to walk in order to return to their nest. When the ants headed away from their nest, walking in the direction they would have gone if they hadn't been moved, scientists concluded that ants rely on an internal navigation system rather than external markers. [4) They also tested what they referred to as the pedometer hypothesis. [C] The scientists tied tiny stilts made out of pig hair to some ams' legs. With the extended legs, which were made of pig hair, the ants moved a greater distance with each step. Marching far past their nest on the way home, the researchers determined that ants count their steps. Plenty of questions remained. For instance, why were the ants' paths back to their nests more direct than the ants' routes to the food? The scientists suspected that the ants. in addition to having an exoskeleton, were constantly maintaining a sense of their location in relation to their nest. (D] Because the routes home were so direct, the ants must have been making adjustments all along. Were they using the sun's position in the sky as a marker of time and location. Perhaps? Even with these uncertainties, the research team was confident it was on the path to figuring out how ants are able to navigate relatively long distances."
    //    },
     //   questions: [
     //   {
      //      questionNumber: "2",
      //      askText: "",
       //     answerPrompts: ["NO CHANGE", "food, they", "food;t they", "food they"],
    //        correctAnswer: "B",
  //      }
 //       ],
 //   })
    
 //   newQuestion.save()
 //       .then(() => console.log('Question saved!'))
 //       .catch((err) => console.log(err));
//}

// Run addDoc function
//addDocTest()