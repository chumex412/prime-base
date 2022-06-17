import React from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import Reason from '../components/Reason'
import Services from '../components/Services'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Services />
        <Reason />
      </main>
      <Footer />
    </>
  )
}

export default Home