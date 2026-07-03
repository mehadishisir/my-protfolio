import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="px-5 md:px-8 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted font-mono">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
