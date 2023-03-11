import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

export default function Login() {

  const navigate = useNavigate();
  const loginHandle = ()=>{
    navigate("/home" )
  }

  return (
    <div className='login'>
     <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Bmsocial</h3>
            <span className="loginDesc">Connect with friends and the world around you on Lamasocial.</span>
        </div>

        <div className="loginRight">
            <div className="loginBox">
                <input className="loginInput" placeholder='Email or Phone' />
                <input className="loginInput" placeholder='Password' type="password"/>
                <button className="loginBtn" onClick={loginHandle}>Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className='loginRegisterBtn'>Create a New Account</button>
            </div>
        </div>

        
        </div>   
    </div>
  )
}
