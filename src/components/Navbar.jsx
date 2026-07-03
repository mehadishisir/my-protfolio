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
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [location.pathname]);

  const goTo = (href) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => goTo("#home")}
          className="font-display text-xl md:text-2xl font-semibold text-ink tracking-tight focus-ring rounded"
        >
          mehadi<span className="text-terracotta">.</span>dev
        </motion.button>

        <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px] uppercase tracking-wide">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => goTo(l.href)}
                className={`relative px-4 py-2 transition-colors focus-ring rounded group ${
                  active === l.href ? "text-terracotta" : "text-inkmuted hover:text-terracotta"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-[1.5px] bg-terracotta origin-left transition-transform duration-300 ${
                    active === l.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => goTo("#contact")}
          className="hidden lg:inline-flex items-center gap-2 bg-ink text-paper font-mono text-[13px] uppercase tracking-wide px-5 py-2.5 rounded-full hover:bg-pinedark transition-colors focus-ring"
        >
          Let's talk
        </motion.button>

        <button
          className="lg:hidden text-ink focus-ring rounded p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="inline-flex"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-paper border-t border-line overflow-hidden"
          >
            <ul className="flex flex-col gap-1 font-mono text-sm uppercase tracking-wide px-5 pb-6 pt-2">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <button
                    onClick={() => goTo(l.href)}
                    className="w-full text-left px-2 py-3 text-inkmuted hover:text-terracotta border-b border-line/70 focus-ring rounded"
                  >
                    {l.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
