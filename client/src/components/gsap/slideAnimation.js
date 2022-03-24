import gsap from "gsap";

export const slideIn = (elem, vars, start) => {
  return gsap.to(elem, { x: 0, ...vars, ease: 'power4.out', stagger: {
    amount: 1,
    from: start,
    ease: 'elastic.out'
  } })
}

export const slideInTl = (elem, vars, ease = "power2.out") => {
  const tl = gsap.timeline();
  tl.to(elem, { x: 0, ...vars, ease })

  return tl
}
