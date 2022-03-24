import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { reasonList } from '../data/data';
import useIntersection from '../custom hook/useIntersection';
import { fadeIn, fadeOut } from './gsap/fadeAnimation';

function ReasonList() {
  const [reasons, setReasons] = useState({choose_us: []});

  const listRef = useRef(null);
  
  const [ref, isVisible] = useIntersection(listRef, 0.3);

  useEffect(() => {
    setReasons(reasonList);
  }, []);

  useLayoutEffect(() => {
    const elem = ref.current;

    if(isVisible) {
      fadeIn(elem, { y: 0, paused: true, duration: 1.5 }).play();
    } else {
      fadeOut(elem, { y: 100 });
    }

  }, [isVisible, ref]);

  const { choose_us } = reasons;
  return (
    <section className="reason-list row" ref={listRef}>
      {
        choose_us.map(reason => {
          const {id, title, text, icon} = reason;

          return (
            <div  key={id} className="col-xs-12 col-sm-6 col-md-4">
              <article>
                <div className="reason-icon">{icon}</div>
                <h3 className="h4">{title}</h3>
                <p className="main-text">{text}</p>
              </article>
            </div>
          )
        })
      }
    </section>
  )
}

export default ReasonList;