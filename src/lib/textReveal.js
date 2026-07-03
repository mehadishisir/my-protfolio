import gsap from "gsap";
import SplitType from "split-type";

// Animate all elements with .text-reveal class
export function textReveal() {
  const elements = document.querySelectorAll(".text-reveal");

  elements.forEach((el) => {
    const split = new SplitType(el, { types: "chars,words" });

    gsap.from(split.chars, {
      opacity: 0,
      y: 40,
      rotateX: -90,
      stagger: 0.02,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });
  });
}