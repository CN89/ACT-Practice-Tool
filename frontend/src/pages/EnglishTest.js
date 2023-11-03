import React, { useState } from "react"
import '../index.css';
import QuestionBar from "../components/Tests/EnglishTest/EnglishBar"
import English from "../components/Tests/EnglishTest/English"

function EnglishTest () {
    const [selectedAnswerPrompt, setSelectedAnswerPrompt] = useState("")
    
    return (
        <div className="english-test">
            <QuestionBar />
            <English 
                selectedAnswerPrompt={selectedAnswerPrompt}
                setSelectedAnswerPrompt={setSelectedAnswerPrompt}
            />
        </div>
    )
}

export default EnglishTest;