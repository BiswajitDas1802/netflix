import React from 'react';
import "./login.css"
import {useState} from 'react'
import  SignUpScreen from './SignUpScreen'
function Login() {
    
    const [signIn, setSignIn] = useState(false)

    
    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img className="loginscreen_logo"
                 src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                  alt=""/>
                  <button className="loginscreen_button" onClick={()=>setSignIn(true)}>
                      Sign In
                  </button>
       <div className="logingrad" /> 
                  </div>
        
             <div className="loginscreen_body">
                     {signIn ?(
                         <SignUpScreen />
                     ):( <>
                     <h1>Unlimited movies, TV shows and more.</h1>
                     <h2>Watch anywhere. Cancel anytime.</h2>
                     <div className="formdiv">
                     <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                     <div className="loginScreen_input">
                         <form className="loginScreen_form">
                             <input type="email" placeholder="Email address"/>
                            <button className="loginScreen_button" onClick={()=>setSignIn(true)}>GET STARTED ></button>
                         </form>
                         </div>
                     </div>
                     </> ) }
             </div>

        </div>

    )
}

export default Login
