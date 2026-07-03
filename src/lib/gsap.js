import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { textReveal } from "./textReveal";

gsap.registerPlugin(ScrollTrigger);

export default function initGSAP() {
  // normal fade reveal
  gsap.utils.toArray(".reveal").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  });

  // text animation
  textReveal();
}