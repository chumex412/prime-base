import { useEffect, useState } from 'react';

const useIntersection = (
  target, 
  threshold = 0.5,
) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(observeElement, {
      root: null,
      rootMargin: "0px",
      threshold
    });

    const elem = target.current;

    if(elem) {
      observer.observe(elem)

      return () => observer.disconnect();
    }
  }, [target, threshold])

  const observeElement = (entries, o) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        setIsVisible(true);
        o.unobserve(entry.target)
      }
    })
  }

  return [target, isVisible];
}

export default useIntersection