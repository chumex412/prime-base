import React, { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap';

import useIntersection from '../custom hook/useIntersection';
import { fadeOut, fadeInTl } from './gsap/fadeAnimation';

const Goals = ({ title, list }) => {
  const { pathname } = useLocation();

  const contentRef = useRef(null);

  const masterTl = useRef(null);

  const [ref, isVisible] = useIntersection(contentRef);

  const childElem = gsap.utils.selector(ref);

  useLayoutEffect(() => {
    if(pathname !== '/') {
      masterTl.current = gsap.timeline({ paused: true })
      masterTl.current.add(fadeInTl(childElem('h2.h3'), { duration: 1 }))
        .add(fadeInTl(childElem('.main-text'), { duration: 1 }, '<'))
      
        if(isVisible) {
        masterTl.current.play();
      } else {
        fadeOut(childElem('h2.h3'), { y: 100 })
        fadeOut(childElem('.main-text'), { y: 100 })
      }
    }
  })

  return (
    <article className="goals" ref={contentRef}>
      <h2 className="h3">{title}</h2>
      <ul>
        {
          list.map(item => {
            return (
              <li key={item.id}>
                <p className="main-text">
                  <span>{item.id}.</span>
                  <span>{item.text}</span>
                </p>
              </li>
            )
          })
        }
      </ul>
    </article>
  )
}

export default Goals