import { MapPin, GraduationCap, Code2, Trophy, Terminal } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";


const iconMap = {
  MapPin: <MapPin size={20} />,
  GraduationCap: <GraduationCap size={20} />,
  Code2: <Code2 size={20} />,
  Trophy: <Trophy size={20} />,
  Terminal: <Terminal size={20} />,
};

export default function About() {
  const { about } = profile;

  return (
    <section className="relative py-28 px-5 md:px-8 bg-slate-950 border-t border-white/5 z-10">
      {/* Background Glows */}
      <div className="absolute top-20 right-20 h-80 w-80 rounded-full bg-cyan-500/5 blur-[160px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-[160px] opacity-60 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-[380px_1fr] gap-16 lg:gap-24 relative z-10">
        
        {/* Left: Profile Card */}
        <div className="lg:sticky lg:top-24 h-fit self-start">
          <Reveal>
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-8">Profile</h3>
              <div className="space-y-6">
                {about.profileItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 text-slate-300">
                    <span className="text-cyan-400 shrink-0">{iconMap[item.icon]}</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Content */}
        <div className="space-y-12">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-xl">
              Building software with analytical thinking.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-slate-300 text-lg leading-[1.9] space-y-7 max-w-[700px]">
              {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              <blockquote className="border-l-2 border-cyan-500 pl-4 italic text-cyan-100/80">
                {about.quote}
              </blockquote>
            </div>
          </Reveal>

          {/* Traits */}
          <div className="grid md:grid-cols-3 gap-6">
            {about.traits.map((t, i) => (
              <Reveal key={t.label} delay={0.3 + i * 0.1}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-500/20 hover:bg-white/[0.07] hover:-translate-y-1">
                  <div className="mb-4 text-cyan-400">{iconMap[t.icon]}</div>
                  <p className="text-cyan-400 font-mono text-xs mb-1">{t.label}</p>
                  <p className="text-white font-medium">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}