
function TypesOfTest () {
    return (
       <div className="py-10 translate-y-1/2 flex justify-center text-buttonText">
            <div className="w-1/2 ">
                <div class="grid justify-center grid-cols-1 gap-4">
                    <div className="w-full text-center mb-5">
                        <h1 className="relative w-full align-center text-5xl font-bold text-text">Individual Tests</h1>
                    </div>
                    <div className="collapse collapse-arrow bg-secondary">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            English
                        </div>
                        <div className="collapse-content flex items-center space-x-5"> 
                            <a href="/english-test" className="btn btn-wide border-none text-buttonText bg-secondary">Go</a>
                            <p className="font-semibold text-lg">45 Minutes</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-secondary">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Mathematics
                        </div>
                        <div className="collapse-content flex items-center space-x-5"> 
                            <a href="/mathematics-test" className="btn btn-wide border-none bg-secondary text-buttonText">Go</a>
                            <p className="font-semibold text-lg">60 Minutes</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-secondary">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Reading
                        </div>
                        <div className="collapse-content flex items-center space-x-5"> 
                            <a href="/reading-test" className="btn btn-wide border-none bg-secondary text-buttonText ">Go</a>
                            <p className="font-semibold text-lg">35 Minutes</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  bg-secondary">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Science
                        </div>
                        <div className="collapse-content flex items-center space-x-5"> 
                            <a href="/science-test" className="btn btn-wide border-none bg-secondary text-buttonText">Go</a>
                            <p className="font-semibold text-lg">35 Minutes</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default TypesOfTest

