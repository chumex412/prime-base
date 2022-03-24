import React, { useLayoutEffect, useRef } from 'react'
import '../styles/loader.css';

const Loader = () => {
  
  let textRef = useRef(null);
  const container = useRef(null);
  
  useLayoutEffect(() => {
    const textElems = textRef.current.textContent.split('');
    let content = "";
    //Wrap text characters in span tags
    for(let elem of textElems) {
      content += `<span>${elem}</span>`
    }
    // Place the wrapper charaters in the DOM
    textRef.current.innerHTML = content;
    // Destructure the children of the text and circle container 
    let elems = [...textRef.current.children, ...container.current.children];

    for(let i = 0; i < elems.length; i += 1) {
      elems[i].style.animationDelay = `${0.1 * i}s`
    }
  }, [])

  return (
    <div className="loader-wrapper">
      <div className="loader">
        <p ref={textRef}>Loading</p>
        <div className="circle-container" ref={container}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
      </div>
    </div>
  )
}

export default Loader;