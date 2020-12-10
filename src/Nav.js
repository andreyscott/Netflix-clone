import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {

 const [show, handleShow] = useState(false);

useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true)
        } else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll")
    };
}, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img 
        className="nav__logo"
        src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?resize=681,383"
        alt="Netflix Logo"
        />
            
        <img 
        className="nav__avatar"
        src="https://avatarfiles.alphacoders.com/183/183839.jpg"
        alt="Netflix Avater"
        />
        </div>
    )
}

export default Nav;
