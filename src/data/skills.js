export const skillGroups = [
  {
    label: "Frontend",
    query: "WHERE layer = 'client'",
    skills: [
      { name: "HTML5 & CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    label: "Backend",
    query: "WHERE layer = 'server'",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST API Design", level: 82 },
      { name: "JWT & Auth Flows", level: 75 },
    ],
  },
  {
    label: "Database",
    query: "WHERE layer = 'storage'",
    skills: [
      { name: "PostgreSQL", level: 78 },
      { name: "SQL & Schema Design", level: 78 },
      { name: "Mongoose / MongoDB", level: 65 },
    ],
  },
  {
    label: "Tools & Workflow",
    query: "WHERE layer = 'tooling'",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code / Cursor", level: 88 },
      { name: "Postman", level: 80 },
      { name: "Render / Vercel Deploy", level: 75 },
    ],
  },
];
