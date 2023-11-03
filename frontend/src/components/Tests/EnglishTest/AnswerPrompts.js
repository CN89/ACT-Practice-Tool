
function AnswerPrompts({ prompts, selectedAnswerPrompt, setSelectedAnswerPrompt, updateResponse }) {
    return (
      <div className="relative">
        {prompts.map((prompt, pIndex) => (
          <div key={pIndex} className="form-control">
            <div className="flex items-center">
              <label className="label cursor-pointer">
                <span className="label-text mr-5">{prompt}</span> 
                <input 
                  type="radio" 
                  name={`radio-${pIndex}`} 
                  className="radio checked:bg-blue-500" 
                  checked={selectedAnswerPrompt === prompt} 
                  onChange={() => {
                    setSelectedAnswerPrompt(prompt)
                    updateResponse(prompt)
                  }}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    )
  }

export default AnswerPrompts
  