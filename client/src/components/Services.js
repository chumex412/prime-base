import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import gsap from 'gsap';
import ServiceList from './ServiceList';
import { servicesList } from '../data/data';
import { slideInTl } from './gsap/slideAnimation';
import { fadeOut, fadeInTl } from './gsap/fadeAnimation';
import useIntersection from '../custom hook/useIntersection';
import '../styles/services.css';

function Services() {
  const [services, setServices] = useState({services: []});

  let headerRef = useRef(null);
  const childElem = gsap.utils.selector(headerRef)

  let masterTl = useRef(null);

  const [ref, isVisible] = useIntersection(headerRef, 0.3)

  useEffect(() => {
    setServices(servicesList)
  }, [])

  useLayoutEffect(() => {

    const span1 = childElem('.h3>span:first-child');
    const span2 = childElem('.h3>span:last-child')

    masterTl.current = gsap.timeline({ paused: true })

    masterTl.current.add(slideInTl(span1, { autoAlpha: 1, duration: 0.5 }), 1)
      .add(slideInTl(span2, { autoAlpha: 1, duration: 1 }, 'back.out'), 0)
      .add(fadeInTl(childElem('.intro-text'), { duration: 0.5 }), '-=1')

    if(isVisible) {
      masterTl.current.play();
    } else {
      fadeOut(span1, { x: -400 })
      fadeOut(span2, { x: -400 })
      fadeOut(childElem('.intro-text'), { y: 60 })
    }

    return () => masterTl.current.progress(0).kill();

  }, [isVisible, ref, childElem])

  return (
    <section className="services">
      <div className="container">
        <div className="services-header" ref={headerRef}>
          <h2 className="h3">
            <span>Our</span>{' '}
            <span>Services</span>
          </h2>
          <p className="header-text intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam erat condimentum sed adipiscing eros, tempus.
          </p>
        </div>
        <div className="services-content">
          <ServiceList  
            data={services}
          />
        </div>
      </div>
    </section>
  )
}

export default Services