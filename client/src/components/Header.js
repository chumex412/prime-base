import React, {useEffect, useRef, useState} from 'react';
import Nav from "./Nav";
import Hero from './Hero';
import { useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [height, setHeight] = useState("");
  const {pathname} = useLocation();

  const headerRef = useRef(null);

  useEffect(() => {
    if(pathname === "/") {
      setHeight("home-height")
    } else {
      setHeight("others-height")
    }
  }, [pathname]);

  return (
    <header className={`header ${height}`} ref>
      <Nav />
      <Hero />
    </header>
  )
}

export default Header