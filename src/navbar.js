import React from 'react'
import {useState,useEffect} from 'react'
import "./nav.css"
function Navbar() {

    const [show, handleShow] = useState(false)
            const transitionNavBar=()=>{  if(window.scrollY > 100){
                  handleShow(true);
              }
              else{
                  handleShow(false);
              }
            }
              useEffect(() => {
                  window.addEventListener("scroll",transitionNavBar)
                  return () => window.removeEventListener('scroll',transitionNavBar)
              }, [])
            
    return (
        <div className={`nav ${show && "nav-black" }`}>
           <div className="nav-contents">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className="nav-logo" alt=""></img>
            
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="nav-avatar" alt=""></img> 
          
            
          </div>
        </div>
    )
}

export default Navbar
