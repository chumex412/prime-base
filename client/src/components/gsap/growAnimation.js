import gsap from "gsap";

export const grow = (elem) => {
  gsap.to(elem, {
    duration: 0.5,
    scale: 1,
    ease: 'bounce-out',
    repeat: -1,
    yoyo: true,
    stagger: {
      each: 0.2,
    }
  })
}