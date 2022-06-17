import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/reasons.css';
import ReasonList from './ReasonList';
import{ fadeInTl, fadeOut } from './gsap/fadeAnimation';
import { slideInTl } from './gsap/slideAnimation';
import useIntersection from '../custom hook/useIntersection';

function Reason() {

  const headerRef = useRef(null);

  const childElem = gsap.utils.selector(headerRef);

  let masterTl = useRef(null)

  const [ref, isVisible] = useIntersection(headerRef, 0.3)

  useLayoutEffect(() => {
    const span1 = childElem('.h3>span:first-child');

    const span2 = childElem('.h3>span:last-child');

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
    <section className="reason">
      <div className="container">
        <section className="reasons-header" ref={headerRef}>
          <h2 className="h3">
            <span>Why choose</span>
              {' '}
            <span>us</span>
          </h2>
          <p className="intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam erat condimentum sed adipiscing eros, tempus.
          </p>
        </section>
        <section className="reasons-content">
          <ReasonList />
        </section>
      </div>
    </section>
  )
}

export default Reason;