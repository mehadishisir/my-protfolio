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
    <section id="contact" className="py-24 md:py-32 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="bg-ink rounded-3xl px-7 py-14 md:px-16 md:py-20 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta mb-4">
              Contact
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-paper tracking-tight max-w-2xl mx-auto">
              Let's build something worth shipping.
            </h2>
            <p className="mt-5 text-paper/60 max-w-xl mx-auto text-sm md:text-base">
              Open to junior full-stack roles and freelance work. Reach out — I usually reply
              within a day.
            </p>

            <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {items.map((it, i) => (
                <motion.a
                  key={it.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 bg-paper/5 hover:bg-paper/10 border border-paper/10 rounded-2xl px-5 py-7 transition-colors focus-ring"
                >
                  <it.icon size={22} className="text-terracotta" />
                  <span className="font-mono text-[11px] uppercase tracking-wide text-paper/50">
                    {it.label}
                  </span>
                  <span className="text-paper text-sm font-medium break-all">{it.value}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
