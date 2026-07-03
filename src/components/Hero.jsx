import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate, useSpring } from "framer-motion";
import { Github, Linkedin, Twitter, Download } from "lucide-react";
import { profile } from "../data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const sectionRef = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${sx}% ${sy}%, rgba(196,98,45,0.07), transparent 40%)`;

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-8 overflow-hidden"
    >
      {/* cursor-tracked spotlight — subtle, desktop feel */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: spotlight }}
      />
      {/* ambient background accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute top-40 -left-32 w-80 h-80 rounded-full bg-pine/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
        {/* Left: intro */}
        <div>
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-5"
          >
            Based in Gazipur, Dhaka, Bangladesh
          </motion.p>
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-ink font-semibold tracking-tight"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 font-display italic text-xl md:text-2xl text-terracotta"
          >
            {profile.designation}
          </motion.p>
          <motion.p
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-6 text-inkmuted text-base md:text-lg leading-relaxed max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-terracotta text-paper font-mono text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:bg-terracottadark transition-colors focus-ring shadow-sm"
            >
              <Download size={17} strokeWidth={2} />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 border border-ink/20 text-ink font-mono text-sm uppercase tracking-wide px-6 py-3.5 rounded-full hover:border-ink transition-colors focus-ring"
            >
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex items-center gap-3"
          >
            {profile.socials.map((s) => (
              <motion.a
                key={s.label}
                whileHover={{ scale: 1.12, y: -3 }}
                whileTap={{ scale: 0.94 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-ink/15 flex items-center justify-center text-ink hover:bg-ink hover:text-paper transition-colors focus-ring"
              >
                <s.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: photo + signature console card */}
        <div className="relative flex flex-col items-center lg:items-end gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: -2, scale: 1.02 }}
            className="relative w-56 h-56 sm:w-64 sm:h-64"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-pine rotate-6" />
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-paper shadow-xl -rotate-2 bg-paper2 flex items-center justify-center">
              {profile.photoUrl ? (
                <img
                  src={profile.photoUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-display text-6xl text-pine font-semibold">
                  {profile.initials}
                </span>
              )}
            </div>
          </motion.div>

          {/* signature: mock psql console reflecting his real backend/DB focus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="w-full max-w-xs bg-ink rounded-xl shadow-xl overflow-hidden font-mono text-[11px] leading-relaxed"
          >
            <div className="flex items-center gap-1.5 px-4 py-2.5 bg-black/20">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8635A]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E8B94E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#5FBF6D]" />
              <span className="ml-2 text-paper/40">psql — developer</span>
            </div>
            <div className="px-4 py-4 text-paper/90 space-y-1">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                <span className="text-[#6FCF97]">mehadi=#</span> SELECT stack, status FROM developer;
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="text-paper/50"
              >
                ------------+------------------
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25, duration: 0.4 }}
              >
                stack | Node · React · PG
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
              >
                status | open_to_work
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.55, duration: 0.4 }}
                className="text-paper/50"
              >
                (1 row)
              </motion.p>
              <p className="mt-2">
                <span className="text-[#6FCF97]">mehadi=#</span>{" "}
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
