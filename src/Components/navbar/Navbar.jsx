import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.svg";


const Navbar = () => {
 const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
       <div className="gpt3__navbar-links_logo">
        <img src={logo} alt='logo'/>
       </div>
        <div className='gpt3__navbar-links-container'>
         <p><a href="#home"> Home </a></p>
         <p><a href="#wGpt3"> what is GPT </a></p>
         <p><a href="#possibility"> Open AI </a></p>
         <p><a href="#features"> Case Studies </a></p>
         <p><a href="#blog"> Library </a></p>
        </div>
      </div>
     <div className='Sign-div'>
      <p className='SignIn'>Sign In</p>
      <button className='SignUp'>Sign Up</button>
     </div>

     
     </div> 
   )
}  
 

export default Navbar;