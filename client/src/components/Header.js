import React, {useEffect, useRef, useState, useLayoutEffect} from 'react';
import gsap from 'gsap';
import Nav from "./Nav";
import Hero from './Hero';
import { useLocation } from 'react-router-dom';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import '../styles/header.css';
import heroHome from '../assets/Hero-img.png';
import otherHero from '../assets/hero-2.png';

function Header({ pageInfo }) {
  const [height, setHeight] = useState("");
  const {pathname} = useLocation();

  gsap.registerPlugin(CSSRulePlugin);

  const headerRef = useRef(null);
  

  useEffect(() => {
    if(pathname === "/") {
      setHeight("home-height");
      headerRef.current.style.backgroundImage =  `url(${heroHome})`;
    } else {
      setHeight("others-height");
      headerRef.current.style.backgroundImage =  `url(${otherHero})`;
    }
  }, [pathname]);

  useLayoutEffect(() => {
    const rule = CSSRulePlugin.getRule(`.header::before`)
    gsap.fromTo(rule, { 
      cssRule: {width: 0, backgroundColor: 'rgba(25, 28, 35, 0.2)'} 
    }, { 
      cssRule: {width: "100%", backgroundColor: 'rgba(25, 28, 35, 0.9)' 
    }, duration: 1, ease: 'power2.in' })
      
  })

  return (
    <header className={`header ${height}`} ref={headerRef}>
      <Nav />
      <Hero {...pageInfo} />
    </header>
  )
}

export default Header