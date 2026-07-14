export const profile = {
  name: "Dev Goswami",
  title: "Full Stack Developer",
  tagline: "Computer Science Student · Full Stack Developer · Problem Solver",
  email: "devgoswami2004@gmail.com",
  phone: "+91 9729056315",
  github: "https://github.com/devgoswami04",
  githubHandle: "devgoswami04",
  linkedin: "https://linkedin.com/in/devgoswami-profile",
  linkedinHandle: "devgoswami-profile",
  resumeUrl: "/dev-goswami-resume.pdf",
  location: "Vellore, India",
};

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Vellore Institute of Technology",
    location: "Vellore, Tamil Nadu",
    duration: "Aug 2023 – Present",
    cgpa: "CGPA: 8.99",
  },
  {
    degree: "Higher Secondary (CBSE)",
    school: "Delhi Public School",
    location: "",
    duration: "2021 – 2022",
    cgpa: "",
  },
];

export const skills = [
  {
    title: "Programming Languages",
    items: ["C++", "Java", "Python", "C", "JavaScript"],
  },
  {
    title: "Web Development",
    items: ["React.js", "Node.js", "Express.js", "Django", "RESTful APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "Schema Design"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman"],
  },
  {
    title: "CS Fundamentals",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
];

export const experience = [
  {
    company: "Sveltetech",
    role: "Front End Developer Intern @",
    location: "Gurugram, India",
    duration: "JUN 2025 – JUL 2025",
    desc: [
      "Developed and optimized responsive web interfaces using React.js and JavaScript, improving page load performance by ~20%.",
      "Designed and implemented 10+ reusable React components, reducing UI development effort by 25%.",
      "Delivered cross-browser, cross-device support across mobile, tablet, and desktop, reducing QA-reported layout bugs.",
    ],
  },
];

export const projects = [
  {
    title: "Vitility — VIT Student Portal",
    desc: "A full-stack web platform serving 100+ VIT students with events, news, ads, and lost & found modules.",
    achievements: [
      "Built with MongoDB, Express.js, React.js, Node.js",
      "12+ REST APIs with JWT authentication and email verification",
      "Optimized DB queries, improving response time by ~20%",
    ],
    techStack: "MongoDB, Express.js, React.js, Node.js",
    link: "https://github.com/devgoswami04",
  },
  {
    title: "Two-Factor Authentication System",
    desc: "A secure authentication service with TOTP-based OTP verification, password hashing, and secure password reset flow.",
    achievements: [
      "TOTP OTP using Passport.js and Speakeasy",
      "Protected middleware eliminating unauthorized access",
      "Token-validated password reset workflow",
    ],
    techStack: "Node.js, Passport.js, Speakeasy",
    link: "https://github.com/devgoswami04",
  },
  {
    title: "News Aggregation Web App",
    desc: "A dynamic news platform aggregating content from multiple external APIs with efficient client-side rendering.",
    achievements: [
      "Integrated 3+ external news APIs via Fetch API",
      "Optimized state handling to render 100+ articles per session",
    ],
    techStack: "React.js, Fetch API, JavaScript",
    link: "https://github.com/devgoswami04",
  },
];

export const certifications = [
  {
    title: "IBM Full Stack Developer Certificate",
    issuer: "IBM",
    issued: "",
    desc: "15-course professional certification covering full-stack development, cloud computing, DevOps, CI/CD, microservices, and containerization. Culminated in a capstone project delivering a scalable SaaS solution using modern cloud practices.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "Python",
      "Flask",
      "Django",
      "Docker",
      "Kubernetes",
      "MongoDB",
      "SQL",
      "Git/GitHub",
    ],
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    issued: "Issued June 2026",
    desc: "Earned professional certification demonstrating strong understanding of Large Language Models (LLMs) and hands-on proficiency with OCI Generative AI Service. Built and deployed a Retrieval-Augmented Generation (RAG) based chatbot, applying semantic search, vector databases, and LangChain to production-style LLM workflows. Gained practical experience tracing, evaluating, and deploying LLM applications on Oracle Cloud Infrastructure.",
    tech: [
      "LLMs",
      "RAG",
      "LangChain",
      "Vector Databases",
      "Semantic Search",
      "OCI Generative AI",
      "Oracle Cloud Infrastructure",
    ],
  },
];

export const navSections = [
  { id: "intro", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
