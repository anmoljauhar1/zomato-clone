import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/images/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign up")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" required placeholder='Your Name' />}
                <input type="email" required placeholder='Your Email'/>
                <input type="password" required placeholder='Password'/>
            </div>
            <button>{currState=="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>by continuing, i agree to the term of use & privacy policy</p>
            </div>
            {
                currState==="Login"
                ? <p>create a new account? <span onClick={()=>setCurrState("Sign up")}>Click here</span> </p>
                : <p>Already  have an accounts? <span onClick={()=>setCurrState("Login")}>Login here</span> </p>  
            }
        </form>
    </div>
  )
}

export default LoginPopup
