import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import '../styles/LoginSignup.css';

const LoginSignup = () => {
    const [action, setAction] = useState("Login");
    const navigate = useNavigate();

    const handleSubmit = () => {
        // Add form validation and authentication logic here
        navigate('/home');
    };

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="User Icon" className="icon" />
                        <input type="text" placeholder="Username" />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="Email Icon" className="icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="Password Icon" className="icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? null : (
                <div className="forget-password">Forget Password <span>Click Here</span></div>
            )}
            <div className="submit-container">
                <div 
                    className="submit" 
                    onClick={() => setAction(action === "Login" ? "Sign Up" : "Login")}
                >
                    {action === "Login" ? "Sign Up" : "Login"}
                </div>
                <div 
                    className="submit"
                    onClick={handleSubmit}
                >
                    {action}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
