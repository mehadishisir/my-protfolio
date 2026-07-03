import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const goTo = (href) => {
    setOpen(false);
    if (location.pathname !== "/") navigate("/" + href);
    else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      layout
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 inset-x-0 z-50 px-4 md:px-6"
    >
      <nav
        className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-500 ease-out ${
          scrolled
            ? "bg-slate-900/40 backdrop-blur-2xl border-cyan-400/10 shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className={`px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? "h-[68px]" : "h-[78px]"}`}>
          <motion.button
            whileHover={{ scale: 1.08, rotate: -2, y: -2, textShadow: "0 0 35px rgba(34,211,238,.9)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => goTo("#home")}
            className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white transition-all duration-300 hover:text-cyan-400 focus-ring rounded"
          >
            mehadi<span className="text-cyan-400">.</span>
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">dev</span>
          </motion.button>

          <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px] uppercase tracking-wide">
            {links.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => goTo(l.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-0.5 focus-ring group ${
                    active === l.href
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-400 hover:text-cyan-300"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute left-4 right-4 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left transition-transform duration-300 ${
                      active === l.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <motion.button
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 40px rgba(6,182,212,.5)" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => goTo("#contact")}
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(34,211,238,.5)] focus-ring"
          >
            Let's Talk
          </motion.button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 rounded-xl hover:bg-white/5 transition-colors focus-ring"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-slate-900/80 backdrop-blur-3xl border border-white/5 rounded-2xl overflow-hidden"
          >
            <ul className="flex flex-col gap-1 font-mono text-sm uppercase tracking-wide px-5 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => goTo(l.href)}
                    className="w-full text-left px-2 py-3 text-slate-400 hover:text-cyan-400 border-b border-white/5 rounded focus-ring"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}