import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const rePasswordRef = useRef()
    
    const navigate = useNavigate()

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };  

    function validate() {
        // username validationi
        if (usernameRef.current.value.length < 3) {
            alert("username 3 tadan kop bolish kere")
            usernameRef.current.focus()
            return false
        }
        // email validate
        if (!validateEmail(emailRef.current.value)) {
            alert("Emayil hato ketilgan")
            emailRef.current.focus()
            return false
        }
        // parollar validationi
        if (passwordRef.current.value !== rePasswordRef.current.value) {
            alert("Parollar mos kelmadi")
            return false
        }
        return true
    }

    function handleRegister(event) {
        event.preventDefault()

        const isValid = validate()

        if (!isValid) {
            return;
        }

        const user = {
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }

        fetch("https://auth-rg69.onrender.com/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === "User registered successfully!") {
                navigate("/login")
            } else if (data.message === "Failed Username is already in use!" || data.message === "Failed Email is already in use!") {
                alert(data.message)
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='w-1/4 mt-4 flex flex-col gap-4'>

                <h1>REGISTER</h1>
                <input className='input input-bordered input-primary w-full max-w-xs' ref={usernameRef} type="text" placeholder='Enter username...' />
                <input className='input input-bordered input-primary w-full max-w-xs' ref={emailRef} type="email" placeholder='Enter email...' />
                <input className='input input-bordered input-primary w-full max-w-xs' ref={passwordRef} type="password" placeholder='Enter password...' />
                <input className='input input-bordered input-primary w-full max-w-xs' ref={rePasswordRef} type="password" placeholder='Re Enter password...' />
    
                <button className='btn btn-success ' onClick={handleRegister}>REGISTER</button>
            </form>
        </div>
    )
    
}

export default Register
