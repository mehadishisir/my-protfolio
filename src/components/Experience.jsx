import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data/profile"; 

const { experience } = profile;

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="relative overflow-hidden py-28 px-5 md:px-8 bg-slate-950"
    >
      {/* Top Divider */}
      <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background Glows */}
      <div aria-hidden="true" className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/5 blur-[160px] opacity-60" />
      <div aria-hidden="true" className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/5 blur-[160px] opacity-60" />

      <div className="max-w-[1320px] mx-auto relative">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-3">
            Experience
          </p>
          <h2 className="max-w-2xl text-3xl md:text-4xl font-semibold tracking-tight text-white mb-16">
            Building experience through real-world projects.
          </h2>
        </Reveal>

        <div className="space-y-6">
          {experience.map((e) => (
            <Reveal key={e.id}>
              <div className="group p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,.08)] transition-[transform,border-color,background-color,box-shadow] duration-300">
                <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{e.role}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{e.org}</p>
                    <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-mono text-cyan-300">
                      {e.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {e.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex gap-4 text-slate-400 text-sm md:text-base leading-relaxed"
                      >
                        <CheckCircle2 size={16} className="mt-1 shrink-0 text-cyan-400" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}