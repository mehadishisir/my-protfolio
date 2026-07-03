import { Github, Linkedin, Facebook, MapPin, GraduationCap, Code2, Trophy, Terminal } from "lucide-react";

export const profile = {
  // --- Hero Section Data ---
  name: "Mehadi Hasan Shisir",
  initials: "MH",
  designation: "Full Stack Web Developer",
  tagline: "I build clean, reliable web applications end-to-end — from relational database design to polished, responsive interfaces. Currently sharpening my craft through intensive full-stack training, with a focus on Node.js, TypeScript, PostgreSQL, and React.",
  email: "mehadishisir@gmail.com",
  phone: "+880 1312-151706",
  whatsapp: "+880 1312-151706",
  location: "Gazipur, Dhaka, Bangladesh",
  photoUrl: "", 
  resumeUrl: "#", 
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
    { label: "Facebook", href: "https://facebook.com/yourusername", icon: Facebook },
  ],

  // --- About Section Data (Added) ---
  about: {
    heading: "Building software with analytical thinking.",
    paragraphs: [
      "Physics taught me how to break complex, messy problems into small, provable steps. I’ve carried that same discipline into code, focusing on building clean, predictable backend architectures and reliable APIs.",
      "I'm currently focused on building production-quality applications, strengthening my backend skills, and preparing for my first software engineering role where I can ship real, impactful work."
    ],
    quote: "I enjoy solving problems whose solutions aren't obvious at first.",
    profileItems: [
      { label: "Location", value: "Gazipur, Dhaka", icon: "MapPin" },
      { label: "Education", value: "Physics", icon: "GraduationCap" },
      { label: "Focus", value: "Full Stack", icon: "Code2" },
      { label: "Interest", value: "Football", icon: "Trophy" },
    ],
    traits: [
      { label: "Focus", text: "Analytical Problem Solving", icon: "Code2" },
      { label: "Stack", text: "React, Node.js, PostgreSQL", icon: "Terminal" },
      { label: "Mindset", text: "Building Scalable Systems", icon: "Trophy" },
    ]
  }
};