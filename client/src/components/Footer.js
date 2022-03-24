import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Mainlogo from './Mainlogo';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { contactList } from '../data/data';
import useIntersection from '../custom hook/useIntersection';
import { fadeIn, fadeInTl, fadeOut } from './gsap/fadeAnimation';

function Footer() {

  const contentRef = useRef(null);
  let linksRef = useRef(null);
  let contactRef = useRef(null)
  const masterTl = useRef(null);

  const [ref, isVisible] = useIntersection(contentRef);
  const childElem = gsap.utils.selector(ref)

  useLayoutEffect(() => {
    masterTl.current = gsap.timeline({ paused: true })

    masterTl.current.add(fadeIn(childElem('.logo'), { scale: 1, duration: 1.5 }, 'bounce'))
      .add(fadeIn(childElem('.footer-sub_nav h2'), { scale: 1, duration: 1.5 }, 'bounce'), '<')
      .add(fadeIn(childElem('.footer-contact h2'), { scale: 1, duration: 1.5 }, 'bounce'), '<')

    if(isVisible) {
      masterTl.current.play()
      fadeIn(linksRef.children, { stagger: 0.5, duration: 1})
      fadeIn(contactRef.children, { stagger: 0.5, duration: 1})
    } else {
      fadeOut(childElem('.logo'), { scale: 0 })
      fadeOut(linksRef.children, { stagger: 0.1, y: 100 })
      fadeOut(contactRef.children, { stagger: 0.1, y: 100 })
      fadeOut(childElem('.footer-sub_nav h2'),  { scale: 0 })
      fadeOut(childElem('.footer-contact h2'),  { scale: 0 })
    }

    return () => {
      masterTl.current.progress(0).kill();
    }

  }, [isVisible, childElem])

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-center" ref={contentRef}>
            <div className="footer-brand">
              <Mainlogo />
            </div>

            <div className="footer-sub_nav">
              <h2>Quick Link</h2>
              <ul className="footer-list" ref={el => linksRef = el}>
                <li className="footer-item">
                  <Link to="/" className="footer-link intro-text">Home</Link>
                </li>
                <li className="footer-item">
                  <Link to="/about" className="footer-link intro-text">About us</Link>
                </li>
                <li className="footer-item">
                  <Link to="/services" className="footer-link intro-text">Services</Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h2 >Office Address</h2>
              <ul className="footer-list" ref={el => contactRef = el}>
                {
                  contactList.map(item => {
                    const { id, name, text, icon } = item;

                    return (
                      <li key={id} className="footer-item">
                        <span className="footer-icon">
                          {icon}
                          <span className="sr-only">{name}{" "}icon</span>
                        </span>
                        <span className="contact-text">
                          {text}
                        </span>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="main-text">
            <span>Copyright &copy;</span>{" "}
            <span>{new Date().getFullYear()}</span>{" "}
            <span>Prime Base Geo-Services. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;