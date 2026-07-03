import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-ink/90">{name}</span>
        <span className="font-mono text-xs text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-line rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-terracotta rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-3">Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-14">
            What I work with
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-x-14 md:gap-y-14">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.1}>
              <div className="flex items-baseline justify-between border-b border-line pb-3 mb-6">
                <h3 className="font-display text-xl font-semibold text-ink">{group.label}</h3>
                <span className="font-mono text-[11px] text-muted">{group.query}</span>
              </div>
              <div className="space-y-5">
                {group.skills.map((s, si) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} delay={si * 0.08} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
