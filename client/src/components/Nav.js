import React, { useEffect, useRef} from 'react';
import { Link, NavLink } from 'react-router-dom';
import MainLogo from './Mainlogo';
import '../styles/nav.css';

function Nav() {

  const containerRef = useRef(null);
  const linksRef = useRef(null); 
  const navBar = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const pageHeight = window.pageYOffset;
      let navHeight = navBar.current.getBoundingClientRect().height;
      
      if(pageHeight > navHeight) {
        navBar.current.classList.add('nav-fixed');
      } else {
        navBar.current.classList.remove('nav-fixed');
      }
    })
  })

  const toggleNavList = () => {
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const listHeight = linksRef.current.getBoundingClientRect().height;

    if(containerHeight === 0) {
      containerRef.current.style.height = `${listHeight}px`;
    } else {
      containerRef.current.style.height = 0;
    }
  }
  
  return (
    <nav className='nav-bar' ref={navBar}>
      <div className="container">
        <div className="nav-center">
          <div className="nav-header">
            <Link to='/' className="nav-brand">
              <MainLogo />
            </Link>
            <button 
              aria-label="Nav links toggler icon" 
              type="button" 
              className="hamburger-btn"
              onClick={toggleNavList}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="hamburger-toggle" fill="none" width="48" height="48"   viewBox="0 0 48 48">
                <title>Hamburger icon</title>
                <desc>Focusing/clicking icon shows or hids the nav links on a small screens</desc>
                <path d="M6 36h36v-4H6v4Zm0-10h36v-4H6v4Zm0-14v4h36v-4H6Z"/>
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