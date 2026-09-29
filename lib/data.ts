/**
 * Portfolio Content
 * =================
 * Edit this file to update all personal information across the site.
 * All sections read from here — no need to touch individual components.
 */

export const personalInfo = {
  name: "Nidhi Chandrakant Rajyaguru",
  title: "Computer Engineering Student",
  tagline: "Building thoughtful digital experiences with code, creativity, and curiosity.",
  email: "nidhirajyaguru174@gmail.com",
  phone: "",
  location: "Palghar, Maharashtra",
  linkedin: "https://linkedin.com/in/nidhi-rajyaguru",
  github: "https://github.com/nidhirajyaguru174-create",
  resume: "",
  about: [
    "I'm a 3rd-year Computer Engineering student passionate about frontend development and UI/UX design. I enjoy turning ideas into clean, responsive, and user-friendly digital experiences.",
    "I'm constantly learning new technologies and exploring ways to build practical solutions through code and design.",
  ],
};

export const skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Design"],
  },
  {
    category: "UI/UX",
    items: ["UI Design", "Figma", "User Experience Design"],
  },
  {
    category: "Programming",
    items: ["C++", "Java"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];

export const projects = [
  {
    title: "SmartQueue",
    description:
      "A digital queue management platform designed to simplify token generation, queue tracking, and real-time status updates.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    github: "https://github.com/nidhirajyaguru174-create/smartqueue",
    live: "",
  },
  {
    title: "QuizChampz",
    description:
      "An online quiz and examination platform with dedicated student and admin experiences for managing tests and quiz-based learning.",
    tech: ["Java", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/nidhirajyaguru174-create/quizchampz",
    live: "",
  },
  {
    title: "AI Bug Detective",
    description:
      "An AI-assisted debugging concept designed to help developers identify, analyze, and understand software bugs more efficiently.",
    tech: ["Next.js", "React", "TypeScript", "AI-assisted debugging"],
    github: "https://github.com/nidhirajyaguru174-create/ai-bug-detective",
    live: "",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio showcasing my skills, projects, education, and journey as a Computer Engineering student.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/nidhirajyaguru174-create/portfolio",
    live: "",
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
    school: "University of Mumbai",
    college: "Theem College of Engineering",
    location: "Palghar, Maharashtra",
    period: "2024 – 2028",
    details: [
      "Relevant coursework in software engineering, data structures, and web development.",
      "Actively involved in coding clubs and technical communities.",
    ],
  },
];

export const achievementsMessage = "More to come — currently building, learning, and exploring.";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
