import { gsap} from 'gsap'

export const textPopUp = (text, vars) => {
  return gsap.from(text, {duration: 2, ...vars, ease: "back", stagger: 0.5})
}