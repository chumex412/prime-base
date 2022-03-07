import React from 'react';
import Mainlogo from './Mainlogo';
import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { contactList } from '../data/data';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-center">
            <div className="footer-brand">
              <Mainlogo />
            </div>

            <div className="footer-sub_nav">
              <h2>Quick Link</h2>
              <ul className="footer-list">
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
              <ul className="footer-list">
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
        <p className="main-text">
          <span>Copyright &copy;</span>{" "}
          <span>{new Date().getFullYear()}</span>{" "}
          <span>Prime Base Geo-Services. All rights reserved.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer;