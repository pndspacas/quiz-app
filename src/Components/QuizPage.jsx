import React from 'react'
import { QuizContext } from '../Helpers/Context'
import MainMenu from './MainMenu'
import Quiz from './Quiz'
import EndScreen from './EndScreen'
import NavBar from './NavBar'

const QuizPage = ({ gameState, setGameState, currentQuestion, setCurrentQuestion, score, setScore }) => {
    return (
        <>
            <NavBar menu={"Log Out"} register={undefined} login={undefined} />
            <QuizContext.Provider value={{ gameState, setGameState, currentQuestion, setCurrentQuestion, score, setScore }}>
                {gameState === "menu"}
                {gameState === "menu" && <MainMenu />}
                {gameState === "quiz" && <h1 className='header'>Question {currentQuestion + 1}</h1>}
                {gameState === "quiz" && <Quiz />}
                {gameState === "endscreen" && <h1 className='header'>Quiz Results</h1>}
                {gameState === "endscreen" && <EndScreen />}
            </QuizContext.Provider>
        </>
    )
}

export default QuizPage