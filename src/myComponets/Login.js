import React from 'react'
import { Link } from "react-router-dom";
import '../App.css';
import { useAuth0 } from '@auth0/auth0-react';
export default function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='LoginPg' >
            <div className="Login">
                <i class="bi bi-chat-left-fill fs-2 text-dark">AI Bot</i>
                <div>AI is revolutionizing industries by automating tasks, enhancing personalization, and enabling
                    intelligent decision-making.</div>
                <Link className='Loginbtn text-decoration-none my-2' onClick={(e) => loginWithRedirect()}>
                    Login
                </Link>
            </div>
        </div>
    )
}
