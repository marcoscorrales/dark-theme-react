import React from 'react';
import useLocalStorage from 'use-local-storage';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FaToggleOn } from 'react-icons/fa';

import './index.css'

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
     const newTheme = theme === 'light' ? 'dark' : 'light';
     setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <div className='login'>
        <h1>Login</h1>
        <div className='container'>
          <div className='top'>
            <FaGoogle size={18}/>
            <FaFacebookSquare size={18}/>
            <FaLinkedin size={18}/>
            <FaTwitterSquare size={18}/>
            <FaApple size={18}/>
          </div>
          <p className='divider'><span>Or</span></p>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your email'/>
            <label>Password</label>
            <input type='password' placeholder='Enter your password'/>
            <div className='remember'>
              <input type='checkbox' checked='checked'/>
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div>
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <FaToggleOn onClick={switchTheme} size={35}/>
        </div>
      </div>
    </div>
  );
}

export default App;
