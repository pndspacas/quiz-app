import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from "../Helpers/Questions"

const EndScreen = () => {
    const { score, setScore, setGameState, setCurrentQuestion } = useContext(QuizContext)

    const reset = () => {
        setScore(0)
        setCurrentQuestion(0)
        setGameState("menu")
    }

    return (
        <>
            <div className="container">
                <div className='endscreen'>
                    {score === Questions.length ? <h2>CONGRATZ YOU GOT IT ALL RIGHT</h2> : <h2>Not bad but you should try again </h2>}
                    <p>Score: {score}</p>
                    <p>Questions: {Questions.length}</p>
                    <button onClick={reset}>Restart Quiz</button>
                </div>
            </div>
        </>
    )
}

export default EndScreen