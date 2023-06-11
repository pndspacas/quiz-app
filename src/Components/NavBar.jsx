import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";

const NavBar = ({ register, login, menu }) => {
    return (
        <div className='navbar'>
            <ul>
                <Link to="/"><li>{menu}</li></Link>
                <Link to="/register"><li>{register}</li></Link>
                <Link to="/login"><li>{login}</li></Link>
            </ul>
        </div>
    )
}

export default NavBar