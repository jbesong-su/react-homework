import React from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom'; 
import {auth} from './firebase';

function Login() {
    const login = (event) =>{
        event.preventDefault();//Prevents regresj
        //do login logic
       // auth.signInWithEmailAndPassword(email,password)
    }

    const register = (event) =>{
        event.preventDefault();
        //do reguster
    }
    return (
        <div className="login">
            <Link to='/'>
                <img
                className='login__logo'
                src="https://leesbirdblog.files.wordpress.com/2015/08/flag-that-bird-flag-of-official-flag-of-uganda-sports-crested-crane.jpg"
                alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"/>
                    <h5>Password</h5>
                    <input type="text"/>
                    <button type="submit" onClick={login}lassName="login__signIn">Sign in</button>
                </form>

                <p>
                    By signing-in you agree to Ugashop's Conditions....
                </p>
                <button type="submit"className="login__signUp" onClick={register}>
                    Create your Amazon Account</button>
            </div>

        </div>
    )
}

export default Login
