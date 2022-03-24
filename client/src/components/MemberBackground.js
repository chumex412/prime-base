import React, { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap';
import { fadeInTl, fadeOut } from './gsap/fadeAnimation';
import useIntersection from '../custom hook/useIntersection';

function MemberBackground({background}) {

  const contentRef = useRef(null);
  const childElem = gsap.utils.selector(contentRef);

  let masterTl = useRef(null)
  const [ref, isVisible] = useIntersection(contentRef, 0.3)

  useLayoutEffect(() => {
    masterTl.current = gsap.timeline({ paused: true })
    
    masterTl.current.add(fadeInTl(childElem('.h3'), { scale: 1, duration: 1 }))
      .add(fadeInTl(childElem('.main-text'), { duration: 0.5 }), '-=0.5')

    if(isVisible) {
      masterTl.current.play();
    } else {
      fadeOut(childElem('.h3'), { scale: 0})
      fadeOut(childElem('.main-text'), { y: 100 })
    }
    return () => masterTl.current.progress(0).kill();

  }, [isVisible, ref, childElem])

  return (
    <article className="background" ref={contentRef}>
      <h2 className="h3">Background</h2>
      <p className="main-text">{background}</p>
    </article>
  )
}

export default MemberBackground;