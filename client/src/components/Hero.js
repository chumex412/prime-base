import React from 'react'
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-center">
          <h1 className="h1">Establishing property boundaries to ensure safe and fit infrastructures</h1>
          <p className="intro-text">Our deep Land survey experience and knowledge of civil engineering  ensures inspection of your property produces detailed and accurate data critical to its structural integrity.</p>
          <button type="button" className="btn hero-btn">Contact us</button>
        </div>
      </div>
    </section>
  )
}

export default Hero