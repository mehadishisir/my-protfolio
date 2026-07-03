// ⚠️ EDIT ME: Replace liveLink and githubLink with your real URLs once ready.
export const projects = [
  {
    id: "devpulse",
    name: "devPulse",
    tagline: "Issue tracking REST API",
    summary:
      "A backend-first issue tracking system built to bring order to how teams log, assign, and resolve bugs — modeled after the workflow real engineering teams use daily.",
    image: "postgres",
    accent: "pine",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "JWT Auth"],
    description:
      "devPulse is a REST API for tracking software issues across a team — think a lightweight Jira core. It handles user authentication with access and refresh tokens, role-based permissions, issue CRUD with status/priority workflows, and relational data modeling in PostgreSQL with proper normalization. The project was built to practice production concerns: environment-based config, centralized error handling, and a clean modular architecture separating routes, controllers, services, and the data layer.",
    challenges:
      "The trickiest part was designing the PostgreSQL schema so relationships between users, projects, and issues stayed normalized without making queries painful. Deployment also threw a curveball — the live instance briefly failed because environment variables (database URL, JWT secret, port) weren't set on the host, which turned into a useful lesson in separating local and production config properly.",
    improvements:
      "Next up: add real-time updates with WebSockets so issue status changes reflect instantly, build out a proper frontend dashboard, add file attachments for bug reports, and write a full test suite with Jest before calling it production-ready.",
    liveLink: "https://example.com", // EDIT ME
    githubLink: "https://github.com/yourusername/devpulse", // EDIT ME
  },
  {
    id: "eco-adventure",
    name: "Eco Adventure Experiences",
    tagline: "Sustainable travel booking platform",
    summary:
      "A frontend concept for a travel platform focused on eco-conscious trips — built to practice component architecture, responsive layouts, and clean UI states across a multi-page booking flow.",
    image: "leaf",
    accent: "terracotta",
    stack: ["React", "Tailwind CSS", "React Router", "JavaScript"],
    description:
      "Eco Adventure Experiences is a travel-booking interface built around sustainable, nature-focused trips. It covers a full browsing-to-booking flow: a landing page with featured destinations, filterable trip listings, detail pages with itineraries and pricing, and a booking form with client-side validation. The focus was on building genuinely reusable components — cards, filters, modals — and keeping the layout fully responsive from mobile to desktop.",
    challenges:
      "Getting the filter and search logic to stay fast and predictable as trip data grew was the main challenge, along with keeping component props clean instead of letting state leak everywhere. Responsive image handling across very different card sizes also took a few iterations to get right.",
    improvements:
      "Planned next: connect it to a real backend and database instead of static data, add user accounts with saved trips, integrate an actual payment flow, and add map-based trip discovery.",
    liveLink: "https://example.com", // EDIT ME
    githubLink: "https://github.com/yourusername/eco-adventure-experiences", // EDIT ME
  },
  {
    id: "boi-poka",
    name: "Boi-Poka",
    tagline: "Online book marketplace",
    summary:
      "A book-lovers' marketplace concept — browse, review, and manage a personal book collection — built to practice CRUD-heavy frontend workflows and state management.",
    image: "book",
    accent: "pinedark",
    stack: ["React", "Tailwind CSS", "Context API", "REST API"],
    description:
      "Boi-Poka (\"bookworm\" in Bengali) is a book discovery and marketplace UI where users can browse listings, view book details, leave reviews, and manage a personal reading list. It was built to get comfortable with CRUD operations end-to-end on the frontend, global state management with Context API, and designing UI that stays clean even as list and detail views share overlapping data.",
    challenges:
      "Keeping state in sync between the book list, detail view, and the review section without prop-drilling everything was the core problem — solved by restructuring state into a shared context. Designing an interface that felt calm and readable, appropriate for a book-focused product, took more iteration than expected.",
    improvements:
      "Future plans: add a real database and auth so listings and reviews persist, build a seller dashboard, add book recommendations based on reading history, and support search with filters by genre, author, and price.",
    liveLink: "https://example.com", // EDIT ME
    githubLink: "https://github.com/yourusername/boi-poka", // EDIT ME
  },
];
