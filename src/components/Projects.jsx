import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28 px-5 md:px-8 bg-slate-950">
      
      <div className="max-w-[1320px] mx-auto relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-16">
            Selected projects I've built.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <motion.div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                
                <h3 className="text-white text-xl font-semibold mb-2">
                  {p.name}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                  {p.summary}
                </p>

                <Link
                  to={`/projects/${p.id}`}
                  className="text-cyan-400 flex items-center gap-2"
                >
                  View Project <ArrowUpRight size={16} />
                </Link>

              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}