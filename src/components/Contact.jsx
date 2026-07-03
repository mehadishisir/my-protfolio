import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data/profile";

const items = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: `https://wa.me/${profile.whatsapp.replace(/[^\d]/g, "")}`,
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-5 md:px-8 bg-slate-950 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-96 w-96 bg-cyan-500/5 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 bg-indigo-500/5 blur-[160px]" />
      </div>

      <div className="max-w-[1320px] mx-auto relative z-10">

        <Reveal>
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400 mb-4">
              Contact
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Let’s build something worth shipping.
            </h2>

            <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Open to junior full-stack roles and freelance work. I usually respond within a day.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6">

          {items.map((it, i) => (
            <motion.a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                group relative flex flex-col items-center gap-4
                rounded-2xl p-7
                bg-white/5 border border-white/10
                transition-all duration-300
                hover:bg-white/10 hover:border-cyan-400/30
                hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]
              "
            >
              {/* glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-cyan-500/5 blur-xl rounded-2xl" />

              {/* icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="text-cyan-400"
              >
                <it.icon size={26} />
              </motion.div>

              {/* label */}
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                {it.label}
              </p>

              {/* value */}
              <p className="text-white text-sm font-medium text-center break-all">
                {it.value}
              </p>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}