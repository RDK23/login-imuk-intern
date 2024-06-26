import React from 'react';
import './login.css';
import  Link from 'next/link'
import { FaLock } from 'react-icons/fa6';

export default function Login() {
    return(
        <div className='wrapper'>
            <form>
                <h1>Sign In</h1>
                <div className='input-box'>
                    <input type='text' placeholder='username'/>
                    <FaCircleUser/>
                    </div>
                <div className="input-box">
                    <input type="password" placeholder="Password"/>
                    <FaLock className='icon' />
                </div>

                <div className="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>

                <a href="/">
                    <button type="submit" >Login</button>
                    </a>

                <div className="register-link">
                    <p>Dont have an account?<a href=" ">Sign up</a></p>
                </div>
            </form>
        </div>
    );
}
                