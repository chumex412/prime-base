import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/page-transition.css'

const PageTransition = ({ children, route, }) => {
  const [transitioning, setTransitioning] = useState(false);

  const playTransition = (node) => {
    setTransitioning(true)
  }

  const stopTransition = (node) => {
    setTransitioning(false)
  }

  return (
    <>
      <TransitionGroup className={transitioning ? "transition" : ""}>
        <CSSTransition 
          key={route} 
          classNames="page" 
          timeout={1000} 
          onEnter={playTransition}
          onExited={stopTransition}
        >
          <div style={{overflow: 'hidden'}}>
            <div className="page-transition-inner">
              {children}
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default PageTransition;