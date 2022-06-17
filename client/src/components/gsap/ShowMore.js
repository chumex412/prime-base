import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const ShowContent = ({ children, visible, vars }) => {
  const [showMore, setShowMore] = useState(false);

  let textRef = useRef(null);
  const tl = useRef(null)

  useLayoutEffect(() => {

    tl.current = gsap.timeline({ paused: true, reversed: true })
    tl.current.from(textRef, {
      height: 0,
      width: 0,
      autoAlpha: 0,
      ease: 'power2.in'
    })
    
    return () => tl.current.progress(0).kill()

  }, [])

  const handleShowMore = () => {
    tl.current.reversed()
      ? tl.current.play() 
      : tl.current.reverse();

    setShowMore(prev => !prev)
  }

  return (
    <div>
      <p className="main-text card-text">
        <span>{visible}</span>
        <span 
          className={`${showMore ? "" : "hidden"}`}  
          ref={ el => textRef = el}
        >{children}</span>
        <button className="main-text show-btn" onClick={handleShowMore}>
          ...{`${!showMore ? "Read more" :  "Show less"}`}
        </button>
      </p>
    </div>
  )
}

export default ShowContent;