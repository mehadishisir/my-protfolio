import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Database, Leaf, BookOpen } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

const iconMap = { postgres: Database, leaf: Leaf, book: BookOpen };
const accentMap = {
  pine: "bg-pine",
  terracotta: "bg-terracotta",
  pinedark: "bg-pinedark",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-8 bg-paper2/60">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-pine mb-3">Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-14">
            Selected work
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-7">
          {projects.map((p, i) => {
            const Icon = iconMap[p.image] || Database;
            return (
              <Reveal key={p.id} delay={i * 0.12} y={24}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col h-full bg-white rounded-2xl border border-line overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`h-44 ${accentMap[p.accent]} relative flex items-center justify-center overflow-hidden`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 6 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon size={56} className="text-paper/90" strokeWidth={1.3} />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display text-xl font-semibold text-ink mb-1">{p.name}</h3>
                    <p className="text-xs font-mono uppercase tracking-wide text-terracotta mb-3">
                      {p.tagline}
                    </p>
                    <p className="text-sm text-inkmuted leading-relaxed mb-6 flex-1">{p.summary}</p>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-paper2 text-inkmuted border border-line"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/projects/${p.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-terracotta transition-colors focus-ring rounded w-fit"
                    >
                      View Details
                      <motion.span
                        className="inline-flex"
                        initial={{ x: 0, y: 0 }}
                        whileHover={{ x: 2, y: -2 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
