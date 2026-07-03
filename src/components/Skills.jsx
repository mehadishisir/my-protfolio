import { motion } from "framer-motion";
import { Monitor, Server, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

const iconMap = {
  Monitor: <Monitor size={20} />,
  Server: <Server size={20} />,
  Wrench: <Wrench size={20} />
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-5 md:px-8 bg-slate-950 overflow-hidden">
      {/* Background Glows */}
      <div aria-hidden="true" className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[160px]" />
      <div aria-hidden="true" className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/5 blur-[160px]" />

      <div className="max-w-[1320px] mx-auto relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Technologies I enjoy working with.
          </h2>
          <p className="text-slate-400 max-w-lg mb-16">
            The tools I use to build fast, accessible, and scalable web applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.1}>
              <div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,.08)] transition-[transform,border-color,background-color,box-shadow] duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {iconMap[group.icon]}
                  </div>
                  <h3 className="font-semibold text-white">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}