import React from 'react'
import {useState,useEffect} from 'react'
import {useHistory,Link} from 'react-router-dom'
import "./nav.css"
function Navbar() {

    const [show, handleShow] = useState(false)
    const history = useHistory()
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
           <Link to="/">
            <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
             onClick={() => history.push("/")} 
             className="nav-logo" alt="" />
                 </Link>
            <Link to="/profile">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
             onClick={() => history.push("/profile")} 
              className="nav-avatar" alt=""/>
                  </Link>
                  
          
           
          </div>
        </div>
    )
}

export default Navbar
