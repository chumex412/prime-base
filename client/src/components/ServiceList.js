import React, {useLayoutEffect, useRef } from 'react';
import ServiceItem from './ServiceItem';
import Loader from './Loader';
import '../styles/service-list.css';
import useIntersection from '../custom hook/useIntersection';
import { fadeIn, fadeOut } from './gsap/fadeAnimation';


function ServiceList({loading, error, data, icons}) {

  const listRef = useRef(null);

  const [ref, isVisible] = useIntersection(listRef, 0.3);

  useLayoutEffect(() => {
    const elem = ref.current
    if(isVisible) {
      fadeIn(elem, { y: 0, paused: true, duration: 1.5 }).play();
    } else {
      fadeOut(elem, { y: 100 });
    }

    return () => fadeIn(elem).progress(0).kill
  }, [isVisible, ref]);

  if(loading) {
    return <Loader />
  }

  if(error) {
    return <strong className="h4">{error.message}</strong>
  }

  if(data) {
    const {services} = data;
    return (
      <section className="service-list row" ref={listRef}>
        {
          services.map(((service, idx) => {
            const { id, title, text, icon } = service;
            return (
              <ServiceItem
                key={id} 
                id={id}
                title={title}
                text={text}
                icon={icon || icons[idx]}
              />
            )
          }))
        }
      </section>
    )
  } else {
    return <h3>Data enroute</h3>
  }

}

export default ServiceList