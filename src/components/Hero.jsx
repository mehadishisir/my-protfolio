import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import {
  Download,
  ArrowRight,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  Facebook,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { profile } from "../data/profile";

// Counter Component
function Counter({ from = 0, to }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, Number(to), {
      duration: 2,
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${Math.floor(value)}+`;
        }
      },
    });

    return () => controls.stop();
  }, [isInView, from, to]);

  return <span ref={ref}>{from}+</span>;
}

export default function Hero() {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  const spotlight = `radial-gradient(circle at ${springX.get()}% ${springY.get()}%, rgba(34,211,238,0.15), transparent 50%)`;

  const photoX = useTransform(springX, [0, 100], [-15, 15]);
  const photoY = useTransform(springY, [0, 100], [-15, 15]);

  return (
    <section
      id="home"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
      }}
      onMouseLeave={() => {
        mouseX.set(50);
        mouseY.set(50);
      }}
      className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden bg-slate-950"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlight }}
      />

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs font-mono uppercase mb-6"
          >
            <Sparkles size={14} /> Open to Work
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-white">
            {profile.name}
          </h1>

          <p className="text-cyan-400 mt-4 text-xl">
            {profile.designation}
          </p>

          <p className="text-slate-400 mt-6 max-w-xl">
            {profile.tagline}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={profile.resumeUrl}
              className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold hover:scale-105 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition flex items-center gap-2"
            >
              View Projects <ArrowRight size={16} />
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-8">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-cyan-400"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-6">
          
          {/* Image */}
          <motion.div
            style={{ x: photoX, y: photoY }}
            className="p-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 to-indigo-500"
          >
            <img
              src={profile.photoUrl || "https://via.placeholder.com/500"}
              alt={profile.name}
              className="rounded-3xl w-full object-cover"
            />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Projects", value: 3 },
    { label: "Tech Stack", value: 8 },
    { label: "Learning", value: 1.5 },
            ].map((i) => (
              <div
                key={i.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <div className="text-white text-xl font-bold">
                  <Counter to={i.value} />
                </div>
                <div className="text-xs text-slate-400">{i.label}</div>
              </div>
            ))}
          </div>

          {/* Typing */}
          <div className="bg-black/40 border border-white/10 rounded-2xl p-4 text-sm text-slate-300 font-mono">
            <TypeAnimation
              sequence={[
                "mehadi@dev:~$ whoami",
                1000,
                "Full Stack Developer",
                1500,
                "React | Node | PostgreSQL",
                1500,
              ]}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </section>
  );
}