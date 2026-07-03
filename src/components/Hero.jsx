import { useRef, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform, useInView, animate } from "framer-motion";
import { Download, ArrowRight, Sparkles, Github, Linkedin, Mail, Facebook } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { profile } from "../data/profile";

// ১. Production-Ready Counter
function Counter({ from = 0, to }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, Number(to), {
      duration: 2,
      onUpdate(value) {
        if (nodeRef.current) nodeRef.current.textContent = `${Math.floor(value)}+`;
      },
    });
    return () => controls.stop();
  }, [isInView, from, to]);

  return <span ref={nodeRef}>{from}+</span>;
}

export default function Hero() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.5 });
  
  // Parallax Values
  const photoX = useTransform(springX, [0, 100], [20, -20]);
  const photoY = useTransform(springY, [0, 100], [20, -20]);

  const spotlight = useMotionTemplate`radial-gradient(clamp(500px, 60vw, 850px) circle at ${springX}% ${springY}%, rgba(99,102,241,.18), transparent 45%)`;

  return (
    <section 
      onMouseMove={(e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set(((e.clientX - left) / width) * 100);
        mouseY.set(((e.clientY - top) / height) * 100);
      }} 
      onMouseLeave={() => { mouseX.set(50); mouseY.set(50); }}
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[url('/noise.png')] opacity-[0.03]" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

      <div className="container mx-auto max-w-[1320px] grid lg:grid-cols-[1.2fr_.8fr] gap-16 items-center">
        {/* Content */}
        <div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300 mb-6">
            <Sparkles size={12} /> Open to Remote Opportunities
          </motion.div>
          <h1 className="text-5xl lg:text-[6rem] font-bold leading-[0.95] text-white">
            {profile.name}
          </h1>
          <p className="mt-6 text-2xl font-semibold text-cyan-400/80">{profile.designation}</p>
          <p className="mt-8 max-w-[620px] text-lg text-slate-400">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href={profile.resumeUrl} download aria-label="Download Resume" className="bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 rounded-full font-bold text-white shadow-lg shadow-cyan-500/20">
              Download Resume
            </motion.a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" aria-label="View Projects" className="border border-white/10 bg-white/5 px-8 py-4 rounded-full font-bold text-white hover:bg-white/10 transition-colors flex items-center gap-2">
              View Projects <ArrowRight size={17} />
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {profile.socials.map((s, i) => (
              <motion.a key={i} whileHover={{ y: -5 }} aria-label={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:border-cyan-400 transition-colors">
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col gap-8">
            <motion.div style={{ x: photoX, y: photoY }} className="relative p-[1px] rounded-[2rem] bg-gradient-to-tr from-cyan-500 to-indigo-500 shadow-2xl">
                <motion.img whileHover={{ scale: 1.03 }} draggable={false} src={profile.photoUrl} alt={profile.name} fetchPriority="high" className="w-full rounded-[2rem] bg-slate-900" />
            </motion.div>

            <div className="grid grid-cols-3 gap-4">
                {[ {l: "Projects", v: "20"}, {l: "Experience", v: "2"}, {l: "Tech", v: "4"} ].map(i => (
                    <div key={i.l} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                        <p className="text-xl font-bold text-white"><Counter to={i.v} /></p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">{i.l}</p>
                    </div>
                ))}
            </div>

            <div className="bg-black/40 border border-white/10 p-5 rounded-2xl font-mono text-[12px] text-slate-300 shadow-2xl">
                <TypeAnimation sequence={["mehadi@portfolio:~$ SELECT * FROM developers;", 800, "Name: Mehadi\nStack: React, Node, TS\nStatus: Open to Work", 3000]} repeat={Infinity} />
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 border-2 border-slate-600 rounded-full flex justify-center p-1">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}