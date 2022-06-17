import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../styles/hero.css';
import { textPopUp } from './gsap/textAnimation';

function Hero({title, page1, page2}) {
  const { pathname } = useLocation();
  let heroRef = useRef(null);
  //let otherPathRef = useRef(null);
  let otherContent = useRef(null); 
  //const elems = gsap.utils.selector(heroRef);
  //const tl = useRef(null);

  useLayoutEffect(() => {
    if(pathname === "/") {
      const heroContents = heroRef.children;
      const tween = textPopUp(heroContents, { scale: 0, opacity: 0, delay: 1 });
      
      return () => tween.kill()
    } else {

      const title = otherContent.querySelector('h1');
      const breadcrumb = otherContent.querySelector('.breadcrumb');
      const tween1 = textPopUp(title, { scale: 0, delay: 1 });
      const tween2 = gsap.from(breadcrumb.children, { 
        x: -500, autoAlpha: 0, duration: 1, ease: 'power4.out', delay: 1, stagger: { 
          amount: 0.5, 
          from: 'end' 
        } 
      })
      
      return () => {
        tween1.kill();
        tween2.kill();
      }
    }
  }, [])

  if(pathname === "/") {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-center" ref={el => heroRef = el}>
            <h1 className="h1 hero-title">Establishing property boundaries to ensure safe and fit infrastructures</h1>
            <p className="intro-text hero-text">Our deep Land survey experience and knowledge of civil engineering  ensures inspection  of your property produces detailed and accurate data critical to its structural integrity.</p>
            <button type="button" className="btn hero-btn">Contact us</button>
          </div>
        </div>
      </section>
    )
  }

  if(pathname !== "/" && page1) {
    const newPage1 = page1.split(" ")[0];
    return (
      <section className="hero">
        <div className="container">
          <div className="hero-center" ref={el => otherContent = el}>
            <h1 className="h1">{title}</h1>
            <strong className="breadcrumb">
              <NavLink 
                to="/" 
                className={({ isActive }) => `h4 breadcrumb-link ${isActive ? "active" : ''}`}
                exact
              >Home</NavLink>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" height="18" viewBox="0 0 18 18">
                <path fill="#fff" d="M6.8 15.5a.9.9 0 0 1-.8-.6.8.8 0 0 1 .2-.9l5-5-5-5a.8.8 0 1 1 1.1-1.2L13 8.4a.8.8 0 0 1 0 1.2l-5.7 5.6c-.1.2-.3.3-.5.3Z"/>
              </svg>
              <NavLink 
                to={`/${newPage1}`} 
                className={({ isActive }) => `h4 breadcrumb-link ${isActive ? "active" : ''}`}
              >{page1}</NavLink>
              {
                page2.text && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="18" height="18" viewBox="0 0 18 18">
                      <path fill="#fff" d="M6.8 15.5a.9.9 0 0 1-.8-.6.8.8 0 0 1 .2-.9l5-5-5-5a.8.8 0 1 1 1.1-1.2L13 8.4a.8.8 0 0 1 0 1.2l-5.7 5.6c-.1.2-.3.3-.5.3Z"/>
                    </svg>
                    <NavLink 
                      to={`/${page2.text.split(" ").join("-")}/${page2.path}`}
                      className={ ({ isActive }) => `h4 breadcrumb-link ${isActive ? "active" : ""}` }
                    >{page2.text}</NavLink>
                  </>
                )
              }
            </strong>
          </div>
        </div>  
      </section>
    )
  } else {
    return null
  }
}

export default Hero