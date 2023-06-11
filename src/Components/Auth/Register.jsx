import React, { useState } from 'react'
import "../../styles/auth.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import NavBar from '../NavBar';

const Register = ({ onFormSwitch }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const validateForm = () => name && email.includes("@") && password.length > 5
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate("/login")

    }
    return (
        <>
            <NavBar register={""} login={"Login"} menu={"Menu"} />
            <div className='auth-form-container'>
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor='name'>Full Name</label>
                    <input value={name} type="text" placeholder='Enter Your Name' id="name" name="name" onChange={(event) => setName(event.target.value)}></input>
                    <label htmlFor="email">Email</label>
                    <input value={email} type="email" placeholder='Enter email' id="email" name="email" onChange={(event) => setEmail(event.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input value={password} type="password" placeholder='Password' id="password" name="password" onChange={(event) => setPassword(event.target.value)} />
                    <button className="submit" disabled={!validateForm()}>Submit</button>
                </form>
                <Link to="/login"><button className='link-btn' onClick={() => onFormSwitch("login")}>Already have an account?</button></Link>
            </div>
        </>

    );
}

export default Register