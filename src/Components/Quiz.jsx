import React, { useContext, useState } from 'react'
import { Questions } from "../Helpers/Questions"
import { QuizContext } from '../Helpers/Context'
const Quiz = () => {

    const { currentQuestion, setCurrentQuestion, score, setScore, setGameState } = useContext(QuizContext)
    const [option, setOption] = useState("")

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer == option) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
        setOption("")
    }

    const finish = () => {
        if (Questions[currentQuestion].answer === option) {
            setScore(score + 1)
        }
        setGameState("endscreen")
    }
    return (
        <div>
            <div className="container">
                <div className="quiz">
                    <h1 className='quizHeader'>{Questions[currentQuestion].question}</h1>
                    <div className='options'>
                        <button className={`active ${option === "A" ? "active" : "noActive"}`} onClick={() => setOption("A")}>{Questions[currentQuestion].optionA}</button>
                        <button className={`active ${option === "B" ? "active" : "noActive"}`} onClick={() => setOption("B")}>{Questions[currentQuestion].optionB}</button>
                        <button className={`active ${option === "C" ? "active" : "noActive"}`} onClick={() => setOption("C")}>{Questions[currentQuestion].optionC}</button>
                        <button className={`active ${option === "D" ? "active" : "noActive"}`} onClick={() => setOption("D")}>{Questions[currentQuestion].optionD}</button>
                        {currentQuestion !== Questions.length - 1 ? <button onClick={nextQuestion}>Next Question</button> :
                            <button onClick={finish}>Finish Quiz</button>}
                    </div >
                </div>
            </div>
        </div >
    )
}

export default Quiz