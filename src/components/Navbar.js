import React, {useState} from 'react'
import './NavbarStyle.css'
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {
    const [clickhamburger, setClickhamburger ] = useState(false);
    const handleClick = () => setClickhamburger(!clickhamburger)
    const [scrollnav, setScrollnav] = useState(false);
    const changeColor = () => {
        if(window.scrollY>=100){
            setScrollnav(true);
        }
        else{
            setScrollnav(false);
        }
    };

    window.addEventListener("scroll", changeColor)

  return (
    <div className={scrollnav ? "header header-bg" : "header"}>
        <a href='#home' className='logo'>Shruti</a>
        <ul className={clickhamburger ? "nav-menu active" : "nav-menu"}>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#skills'>Skills</a>
            </li>
            <li>
                <a href='#project'>Project</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>

        <div className='hamburger' onClick={handleClick}> 

        {clickhamburger ?(<FaTimes size={20} style={{color:'white'}} />):
        (<FaBars size={20} style={{color:'white'}} />
        )}
        
        </div>
    </div>
  )
}

export default Navbar