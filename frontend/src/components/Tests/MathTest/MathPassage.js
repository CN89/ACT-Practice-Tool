
function Passage ({ title, text }) {
    return (
      <div className="grid h-64 w-full text-center p-10 card bg-base-300 rounded-box place-items-center overflow-y-auto">
        <h1 className="text-3xl font-bold mb-5">{title}</h1>
        <p>{text}</p>
      </div>
    )
  }
  

export default Passage