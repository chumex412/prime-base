import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';
import Goals from './Goals';
import { missionData, visionData } from '../data/aboutData';
import { fadeInTl, fadeOut } from './gsap/fadeAnimation';
import { slideInTl } from './gsap/slideAnimation';
import useIntersection from '../custom hook/useIntersection';
import about_img from '../assets/about-img.png';
import '../styles/about-us.css';

function AboutUs() {
  const { pathname } = useLocation();

  const contentRef = useRef(null);

  const masterTl = useRef(null);

  const [ref, isVisible] = useIntersection(contentRef);
  const childElem = gsap.utils.selector(ref);

  useLayoutEffect(() => {
    if(pathname === '/') {
      masterTl.current = gsap.timeline({ paused: true })
      masterTl.current.add(slideInTl(childElem(".about-left>img"), { autoAlpha: 1, duration: 1 }))
        .add(slideInTl(childElem(".h3>span:first-child"), { autoAlpha: 1, duration: 1 }, 'back.out'), '<')
        .add(slideInTl(childElem(".h3>span:last-child"), { autoAlpha: 1, duration: 0.5 }))
        .add(slideInTl(childElem(".main-text"), { autoAlpha: 1, duration: 1 }), '-=1')
        .add(fadeInTl(childElem(".about-btn"), { duration: 1 }), '-=0.5');
      
      if(isVisible) {
        masterTl.current.play()
      } else {
        fadeOut(childElem(".about-left>img"), { x: -500 })
        fadeOut(childElem(".h3>span:first-child"), { x: 500})
        fadeOut(childElem(".h3>span:last-child"), { x: 500})
        fadeOut(childElem(".main-text"), { x: 500 })
        fadeOut(childElem(".about-btn"), { y: 100 })
      }

      return () => masterTl.current.progress(0).kill()
    }

  }, [isVisible, ref, childElem, pathname])

  useLayoutEffect(() => {
    if(pathname !== '/') {
      masterTl.current = gsap.timeline({ paused: true })
      masterTl.current.add(fadeInTl(childElem('.about-header'), { duration: 1 }))
        .add(fadeInTl(childElem('.main-text'), { duration: 1 }, '-=0.5'))

      if(isVisible) {
        masterTl.current.play();
      } else {
        fadeOut(childElem('.about-header'), { y: 100 })
        fadeOut(childElem('.main-text'), { y: 100 })
      }
    }
  })
    

  const aboutSection = pathname === "/" ? (
    <div className="about-content row" ref={contentRef}>
      <section className="col-sm-12 col-md-5 about-left">
        <img src={about_img} alt="A man taking survey data" className="about-img img-fluid" />
      </section>
      <article className="col-sm-12 col-md-6 about-right">
        <h2 className="h3">
          <span>About</span>{" "}
          <span>Us</span>
        </h2>
        <p className="main-text">
          We provide Geo-services such as Surveying And Mapping, Field Data Collection And Processing, Geographic Information System, Cadastral Survey And Civil Engineering Services. Delivering quality construction equipment for building purposes. We also provide building maintenance and solutions.
        </p>
        <button type="button" className="btn about-btn">Learn more</button>
      </article>
    </div>
  ) : (
    <>
      <div className="about-content about-content_page" ref={contentRef}>
        <h2 className="h3 about-header">About us</h2>
        <article>
          <p className="main-text">
            We provide Geo-services such as Surveying And Mapping, Field Data Collection And Processing, Geographic Information System, Cadastral Survey And Civil Engineering Services. Delivering quality construction equipment for building purposes. We also provide building maintenance and solutions.
          </p>  
        </article> 
      </div>
      <Goals 
        title="mission"
        list={missionData}
      />
      <Goals 
        title="vision"
        list={visionData}
      />
    </>
  )

  return (
    <section className="about">
      <div className="container">
        {aboutSection}
      </div>
    </section>
  )
}

export default AboutUs