import React, { useState } from 'react'
import "../../styles/auth.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar';

const Login = ({ onFormSwitch }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const validateForm = () => email.includes("@") && password.length > 5
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/quiz")
    }
    return (
        <>
            <NavBar register={"Register"} login={""} menu={"Menu"} />
            <div className='auth-form-container'>
                <h2>Login</h2>
                <form className='login-form' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} type="email" placeholder='Enter email' id="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input value={password} type="password" placeholder='Password' id="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                    <button className="submit" disabled={!validateForm()}>Submit</button>
                </form>
                <Link to="/register"><button className='link-btn'>Don't have an account?</button></Link>
            </div>
        </>

    );

}


export default Login