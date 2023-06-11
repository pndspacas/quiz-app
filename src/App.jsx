import React, { useState } from 'react'
import MainPage from './Components/MainPage'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
import QuizPage from './Components/QuizPage'

function App() {

  const [gameState, setGameState] = useState("menu")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)


  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/register' element={<Register onFormSwitch={undefined} />} />
          <Route path='/login' element={<Login onFormSwitch={undefined} />} />
          <Route path="/quiz" element={<QuizPage gameState={gameState} setGameState={setGameState} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} score={score} setScore={setScore} />} />
        </Routes>
      </Router>

    </div >
  )
}

export default App
