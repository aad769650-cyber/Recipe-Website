// import "./css/style.css"
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom"
import { useState } from "react";
// <RxCross2 />  cross
{/* <IoReorderThreeOutline /> */}
export const Header=()=>{

const [isShow,setIsShow]=useState(false)


























const handleClick=()=>{
// console.log("Clicked");
setIsShow(!isShow)
}









    return (
        <>
    <header className="header">

        <div className="main-header-parent flex-evenly">
            <div className="image flex-center">
                
<img src="download.svg" alt="Logo for recipe" />
            </div>

            <div className="pages">
                <ul className="List-Ul flex-evenly">
                    <li className="navbar-lists"><NavLink to="/">Home</NavLink></li>
                    <li className="navbar-lists"><NavLink to="/about">About us</NavLink></li>
                    <li className="navbar-lists"><NavLink to="/faq">FAQ</NavLink></li>
                    <li className="navbar-lists"><NavLink to="/recipe">Recipe</NavLink></li>
                    <li className="navbar-lists"><NavLink to="/login">Login</NavLink></li>
                </ul>
                <div className="menu" onClick={handleClick}>{!isShow?<IoReorderThreeOutline />:<RxCross2 /> }</div>

            </div>
        </div>

              
                        <div className={`menu-bar ${isShow?'show-menu':"hide-menu"}`}>
              
                    <ul className="menu-Ul">
              
                          <li className="menu-lists"><NavLink to="/">Home</NavLink></li>
                    <li className="menu-lists"><NavLink to="/about">About us</NavLink></li>
                    <li className="menu-lists"><NavLink to="/faq">FAQ</NavLink></li>
                    <li className="menu-lists"><NavLink to="/recipe">Recipe</NavLink></li>
                    <li className="menu-lists"><NavLink to="/login">Login</NavLink></li>
                    
                    </ul>
                </div>
    </header>
        
        
        
        </>
    )
}