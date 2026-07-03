import Reveal from "./Reveal";

const education = [
  {
    degree: "B.Sc. in Physics",
    institute: "National University, Bangladesh",
    period: "In Progress · 4th Year",
    detail:
      "Four-year honours program building a strong foundation in analytical thinking, mathematical modeling, and structured problem-solving — skills that translate directly into debugging and system design.",
  },
  {
    degree: "Next Level Web Development",
    institute: "Programming Hero",
    period: "2026 · In Progress",
    detail:
      "Full-stack training focused on React, Node.js, TypeScript, PostgreSQL, authentication systems, and production-grade backend architecture.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 px-5 md:px-8 bg-slate-950 overflow-hidden"
    >
      {/* glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-20 h-80 w-80 bg-cyan-500/5 blur-[160px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 bg-indigo-500/5 blur-[160px]" />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">

        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Education
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-14">
            Academic journey
          </h2>
        </Reveal>

        {/* timeline line */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10">

            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1}>
                <div
                  className="
                    relative pl-16 group
                    transition-all duration-300
                  "
                >
                  {/* dot */}
                  <div className="absolute left-[22px] top-2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

                  {/* card */}
                  <div
                    className="
                      p-6 md:p-7 rounded-2xl
                      bg-white/5 border border-white/10
                      hover:border-cyan-400/30 hover:bg-white/10
                      transition-all duration-300
                      group-hover:translate-x-1
                    "
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {e.degree}
                      </h3>

                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
                        {e.period}
                      </span>
                    </div>

                    <p className="text-cyan-400 font-medium text-sm mb-3">
                      {e.institute}
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {e.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}