
function Question ({ askText, questionNumber }) {
    return (
      <h2 className="text-2xl font-semibold my-2">Question {questionNumber}: {askText}</h2>
    );
  }
  
export default Question