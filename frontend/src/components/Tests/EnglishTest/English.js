import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Passage from './EnglishPassage';
import Question from './EnglishQuestion';
import AnswerPrompts from './AnswerPrompts';

function English ({ selectedAnswerPrompt, setSelectedAnswerPrompt }) {
  const [data, setData] = useState({})
  const [questionId, setQuestionId] = useState(null)

  useEffect (() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/questions/question')
        setData(response.data)

        setQuestionId(response.data._id)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const getUserId = async () => {
    try {
      const userResponse = await axios.get('http://localhost:4000/api/questions/user')
      return userResponse.data
    } catch (error) {
      console.error(error)
    }
  }
  

  const updateResponse = async (response) => {
    console.log("Function Called")
    try {
      const userId = await getUserId();
      const userResponse = await axios.get(
        `http://localhost:4000/api/questions/responses/${userId}/${questionId}`
      )
  
      if (userResponse.data) {
        // Update the existing user response document
        const responseData = await axios.put(
          `http://localhost:4000/api/questions/responses/${userResponse.data._id}`,
          { response }
        )
        setData(responseData.data)
      } else {
        // Create a new user response document
        const responseData = await axios.post('http://localhost:4000/api/questions/responses', {
          response,
          userId,
          baseQuestionId: questionId,
        })
        setData(responseData.data)
      }
    } catch (error) {
      console.error(error)
    }
  }
  
  

  return (
    <div className="flex flex-col relative w-2/3 top-56 translate-x-1/4 justify-between space-y-8">
      <div>
        {data.passage ? (
          <>
            <Passage title={data.passage.title} text={data.passage.passageText} />

            {data.questions.map((question, qIndex) => (
              <div key={qIndex} className="relative text-left">
                <Question askText={question.askText} questionNumber={question.questionNumber} />

                <AnswerPrompts 
                  prompts={question.answerPrompts} 
                  selectedAnswerPrompt={selectedAnswerPrompt} 
                  setSelectedAnswerPrompt={setSelectedAnswerPrompt} 
                  updateResponse={updateResponse} 
                />
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default English
