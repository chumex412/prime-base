import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OurTeam from '../components/OurTeam';

function About() {
  return (
    <>
      <Header pageInfo={{title: "who we are", page1: "about us", page2: ""}} />
      <main>
        <AboutUs />
        <OurTeam />
      </main>
      <Footer />
    </>
  )
}

export default About;