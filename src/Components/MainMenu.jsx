import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Context'

const MainMenu = () => {
    const { setGameState } = useContext(QuizContext)
    return (
        <>
            <div className="container">
                <div className='menu'>
                    <p>Welcome to this quiz do you have what is takes to beat it ?</p>
                    <button className='mainButton' onClick={() => setGameState("quiz")}>Start Quiz</button>
                </div>
            </div>
        </>

    )
}

export default MainMenu