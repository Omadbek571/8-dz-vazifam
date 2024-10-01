import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()

    function validate() {
        // username validationi
        if (usernameRef.current.value.length < 3) {
            alert("Username 3 tadan ko'p bo'lishi kerak")
            usernameRef.current.focus()
            return false
        }

        return true
    }

    function handleLogin(event) {
        event.preventDefault()

        const isValid = validate()

        if (!isValid) {
            return;
        }

        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        fetch("https://auth-rg69.onrender.com/api/auth/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    // Agar login muvaffaqiyatli bo'lsa, foydalanuvchini home sahifasiga yo'naltiramiz
                    navigate("/home")
                } else {
                    alert(data.message || "Login xato!")
                }
            })
            .catch(err => {
                console.log("Error:", err);
            })
    }
        return (
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl font-bold mb-4">LOGIN</h1>
                <form className="w-1/4 mt-4 flex flex-col gap-4">
                    <input className="input input-bordered input-accent w-full max-w-xs" ref={usernameRef} type="text" placeholder="Enter username..." />
                    <input className="input input-bordered input-accent w-full max-w-xs" ref={passwordRef} type="password" placeholder="Enter password..." />
                    <button className="btn btn-accent" onClick={handleLogin}>Login</button>
                </form>
            </div>
        );
    

}

export default Login
