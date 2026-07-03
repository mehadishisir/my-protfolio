import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
