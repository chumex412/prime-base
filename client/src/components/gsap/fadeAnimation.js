import gsap from "gsap";

export const fadeIn = (elem, vars, ease = "power2.out") => {
  return gsap.to(elem, { autoAlpha: 1, y: 0, ...vars, ease })
}

export const fadeOut = (elem, vars) => {
  return gsap.set(elem, { autoAlpha: 0, ...vars });
}

export const fadeInTl = (elem, vars, ease = "power2.out") => {
  const tl = gsap.timeline();
  tl.to(elem, { autoAlpha: 1, y: 0, ...vars, ease })
  return tl;
}