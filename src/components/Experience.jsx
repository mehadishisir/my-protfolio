import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experience = [
  {
    role: "Full Stack Developer (Training Track)",
    org: "Programming Hero — Next Level Web Development",
    period: "2026 — Present",
    points: [
      "Designed and built devPulse, a production-style REST API with JWT authentication, role-based access, and a normalized PostgreSQL schema.",
      "Practiced end-to-end backend workflows: middleware design, refresh-token auth flows, and centralized error handling in Express.",
      "Deployed and debugged live services on Render, including diagnosing environment-configuration issues in production.",
      "Built and shipped multiple frontend projects using React and Tailwind CSS with a focus on responsive, accessible UI.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-3">Experience</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-14">
            Hands-on experience
          </h2>
        </Reveal>

        <div className="space-y-10">
          {experience.map((e) => (
            <Reveal key={e.role}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 border border-line rounded-2xl p-7 md:p-9 bg-white/60 hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-1">{e.role}</h3>
                  <p className="text-pine text-sm font-medium mb-1">{e.org}</p>
                  <p className="font-mono text-xs uppercase tracking-wide text-muted">{e.period}</p>
                </div>
                <ul className="space-y-3">
                  {e.points.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3 text-sm text-inkmuted leading-relaxed"
                    >
                      <span className="text-terracotta mt-1.5">▸</span>
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
