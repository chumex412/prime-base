import React, { useEffect, useRef, useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainLogo from './Mainlogo';
import '../styles/nav.css';

function Nav() {
  const [fixed, setFixed] = useState(false);
  const [open, setOPen] = useState(false)

  const containerRef = useRef(null);
  const linksRef = useRef(null); 

  useEffect(() => {
    window.addEventListener('scroll', handleNav);

    return () => {
      window.removeEventListener('scroll', handleNav)
    }
  });

  const handleNav = () => {
    const pageHeight = window.pageYOffset;
      
    if(pageHeight > 98.5) {
      setFixed(true)
    } else {
      setFixed(false);
    }
  }

  const toggleNavList = () => {
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const listHeight = linksRef.current.getBoundingClientRect().height;

    if(containerHeight === 0) {
      containerRef.current.style.height = `${listHeight}px`;
    } else {
      containerRef.current.style.height = 0;
    }

    setOPen(prev => ! prev)
  }
  
  return (
    <nav className={`nav-bar ${fixed ? "nav-fixed" : ""}`} >
      <div className="container">
        <div className="nav-center">
          <div className="nav-header">
            <Link to='/' className="nav-brand">
              <MainLogo />
            </Link>
            <button 
              aria-labelledby="Hamburger toggle icon" 
              type="button" 
              className="hamburger-btn"
              onClick={toggleNavList}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="hamburger-toggle" width="48" height="48"   viewBox="0 0 48 48">
                <title>Hamburger toggle icon</title>
                <desc>Focusing/clicking icon shows or hids the nav links on a small screens</desc>
                <path stroke="#000" strokeWidth="4" d={ open ? "m12 36 23.7-23.7" : "M7 14h33.5" }/>
                <path style={{ opacity: open ? 0 : 1 }} stroke="#000" strokeWidth="4" d="M7 24h33.5"/>
                <path stroke="#000" strokeWidth="4" d={ open ? "m12 12 23.6 23.7" : "M7 34h33.5" }/>
              </svg>
            </button>
          </div>
          <div className="links-container" ref={containerRef}>
            <ul className="nav-list" ref={linksRef}>
              <li className="nav-item">
                <NavLink 
                  to='/' 
                  className={({ isActive }) => `top-link nav-link ${isActive ? "active" : ''}`}
                >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/about' 
                  className={({ isActive }) => `top-link nav-link ${isActive ? "active" : ''}`}
                >About us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to='/services' 
                  className={({ isActive }) => `top-link nav-link ${isActive ? "active" : ''}`}
                >Services</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav