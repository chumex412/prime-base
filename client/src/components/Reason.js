import React from 'react';
import '../styles/reasons.css';
import ReasonList from './ReasonList';

function Reason() {
  return (
    <section className="reason">
      <div className="container">
        <section className="reasons-header">
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