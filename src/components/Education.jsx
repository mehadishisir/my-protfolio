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
      "Intensive full-stack training covering JavaScript, TypeScript, React, Node.js, Express, and PostgreSQL, with a strong emphasis on real-world backend architecture, authentication, and deployment.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 px-5 md:px-8 bg-paper2/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-3">Education</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-14">
            Educational background
          </h2>
        </Reveal>

        <div className="space-y-0">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1} y={20}>
              <div className="grid md:grid-cols-[100px_1fr] gap-4 md:gap-10 py-8 border-t border-line last:border-b">
                <span className="font-mono text-sm text-terracotta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                      {e.degree}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-wide text-muted">
                      {e.period}
                    </span>
                  </div>
                  <p className="text-pine text-sm font-medium mb-2">{e.institute}</p>
                  <p className="text-inkmuted text-sm leading-relaxed max-w-2xl">{e.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
