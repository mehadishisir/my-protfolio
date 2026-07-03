import { Github, Linkedin, Facebook } from "lucide-react";

// ⚠️ EDIT ME: update social links, photoUrl, and resumeUrl once ready.
export const profile = {
  name: "Mehadi Hasan Shisir",
  initials: "MH",
  designation: "Full Stack Web Developer",
  tagline:
    "I build clean, reliable web applications end-to-end — from relational database design to polished, responsive interfaces. Currently sharpening my craft through intensive full-stack training, with a focus on Node.js, TypeScript, PostgreSQL, and React.",
  email: "mehadishisir@gmail.com",
  phone: "+880 1312-151706",
  whatsapp: "+880 1312-151706",
  location: "Gazipur, Dhaka, Bangladesh",
  photoUrl: "", // EDIT ME: add path to your photo, e.g. "/photo.jpg" (place file in /public)
  resumeUrl: "#", // EDIT ME: add path to your resume PDF, e.g. "/resume.pdf" (place file in /public)
  socials: [
    { label: "GitHub", href: "https://github.com/yourusername", icon: Github }, // EDIT ME
    { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin }, // EDIT ME
    { label: "Facebook", href: "https://facebook.com/yourusername", icon: Facebook }, // EDIT ME
  ],
};
