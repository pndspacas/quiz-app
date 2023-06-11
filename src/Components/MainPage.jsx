import React, { useEffect } from 'react'
import "../styles/mainpage.css"
import Quiz from "../images/quiz.png"
import NavBar from './NavBar'


const MainPage = () => {
    return (
        <>
            <NavBar register={"Register"} login={"Login"} menu={""} />
            <div className='main-container'>
                <img src={Quiz} /></div>
        </>
    )
}

export default MainPage