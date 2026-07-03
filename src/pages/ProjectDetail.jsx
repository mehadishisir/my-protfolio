import { useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Database, Leaf, BookOpen } from "lucide-react";
import { projects } from "../data/projects";

const iconMap = { postgres: Database, leaf: Leaf, book: BookOpen };
const accentMap = {
  pine: "bg-pine",
  terracotta: "bg-terracotta",
  pinedark: "bg-pinedark",
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-3xl text-ink mb-4">Project not found</h1>
        <button
          onClick={() => navigate("/")}
          className="font-mono text-sm text-terracotta hover:underline"
        >
          ← Back to home
        </button>
      </div>
    );
  }

  const Icon = iconMap[project.image] || Database;

  return (
    <div className="min-h-screen bg-paper">
      <header className="px-5 md:px-8 pt-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-inkmuted hover:text-terracotta transition-colors focus-ring rounded"
          >
            <ArrowLeft size={15} />
            Back to projects
          </Link>
        </div>
      </header>

      <div className={`mt-8 h-56 md:h-72 ${accentMap[project.accent]} flex items-center justify-center relative overflow-hidden`}>
        <motion.div
          initial={{ scale: 0.7, opacity: 0, rotate: -6 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon size={80} className="text-paper/90" strokeWidth={1.2} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mx-auto px-5 md:px-8 py-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
          {project.tagline}
        </p>
        <h1 className="font-display text-3xl md:text-5xl font-semibold text-ink tracking-tight mb-6">
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-paper2 text-inkmuted border border-line"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-14">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-terracotta text-paper font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-full hover:bg-terracottadark transition-colors focus-ring"
          >
            <ExternalLink size={16} />
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-ink/20 text-ink font-mono text-sm uppercase tracking-wide px-6 py-3 rounded-full hover:border-ink transition-colors focus-ring"
          >
            <Github size={16} />
            GitHub (Client)
          </a>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3 pb-2 border-b border-line">
              Overview
            </h2>
            <p className="text-inkmuted leading-relaxed">{project.description}</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3 pb-2 border-b border-line">
              Challenges Faced
            </h2>
            <p className="text-inkmuted leading-relaxed">{project.challenges}</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3 pb-2 border-b border-line">
              Future Improvements
            </h2>
            <p className="text-inkmuted leading-relaxed">{project.improvements}</p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex justify-between items-center">
          <Link
            to="/#projects"
            className="font-mono text-sm text-inkmuted hover:text-terracotta transition-colors focus-ring rounded"
          >
            ← All projects
          </Link>
          <Link
            to="/#contact"
            className="font-mono text-sm text-terracotta hover:underline focus-ring rounded"
          >
            Get in touch →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
