import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import "./header.css"

const Header = () => {
    const[isMobile, setIsMobile] = useState(false);
  return (
    <>
     <header className='Header'>
        <div className="brand">
            <Link to={"/"}>
            <h1><span className='the'>The</span>Serian</h1>
            </Link>
        </div>

        <nav className={isMobile? "mobile-reponsive" : "nav-link"} onClick={()=>{setIsMobile(false)}}>
            <li><NavLink to={"/"} className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>Home</NavLink></li>
            <li><NavLink to={"/Bollywood"} className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>Bollywood</NavLink></li>
            <li><NavLink to={"/HollyWood"} className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>HollyWood</NavLink></li>
            <li><NavLink to={"/Technology"} className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>Technology</NavLink></li>
            <li><NavLink to={"/Fitness"} className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>Fitness</NavLink></li>
            <li><NavLink to={"/Food"} className={({ isActive }) => (isActive ? 'activeClass' : 'notactiveClass')}>Food</NavLink></li>
        </nav>
        <button className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
            {isMobile ? <RxCross1/>  : <AiOutlineBars/>}
        </button>
        <hr  className='hr'/>
    </header> 
    </>
  )
}
export default Header
