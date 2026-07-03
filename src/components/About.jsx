import Reveal from "./Reveal";

const traits = [
  { label: "Journey", text: "Physics background → self-taught frontend → full-stack training" },
  { label: "Enjoys", text: "Backend logic, database design, and clean API architecture" },
  { label: "Off-duty", text: "Following football, gaming, tech news & AI developments" },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-8 bg-paper2/60">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-3">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight">
            A physicist's discipline,<br />a developer's curiosity.
          </h2>
          <div className="mt-8 space-y-4">
            {traits.map((t, i) => (
              <Reveal key={t.label} delay={0.1 + i * 0.08} y={16}>
                <div className="flex gap-4 border-t border-line pt-4">
                  <span className="font-mono text-xs uppercase tracking-wide text-terracotta w-24 shrink-0 pt-0.5">
                    {t.label}
                  </span>
                  <span className="text-inkmuted text-sm leading-relaxed">{t.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="text-ink/90 text-base md:text-lg leading-[1.85] space-y-5">
            <p>
              I started out studying Physics — four years of learning how to break big, messy
              problems into small, provable steps. That habit followed me straight into code.
              I picked up HTML, CSS, and JavaScript on my own first, building small things just
              to see them work, before deciding to go all-in on web development through a
              structured full-stack program.
            </p>
            <p>
              What I enjoy most is the backend: designing a database schema that actually makes
              sense, writing an API that behaves predictably, and watching a system hold together
              under real use. I like the kind of problem where the fix isn't obvious at first —
              where you have to sit with it, trace it back, and actually understand what's
              happening under the hood. That's the physics habit again, refusing to let go.
            </p>
            <p>
              Outside of code, I'm usually following football, catching up on tech and AI news, or
              deep in a gaming session. I'm also drawn to Islamic studies and reflection — it keeps
              me grounded while I chase deadlines and debug errors at 2 AM. I try to bring the same
              thing to my work that I try to bring to everything else: patience, honesty about what
              I don't yet know, and a steady effort to get a little better every day.
            </p>
            <p>
              Right now, I'm focused on one goal — becoming a developer a team can rely on, and
              landing my first junior role where I can keep learning while actually shipping real
              work.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
