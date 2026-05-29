export const personal = {
  name: "Muhammad Fahad Idrees",
  title: "Computer Science Student - Full Stack Developer | C++ / C / Python Programmer | AI & ML Engineer",
  subtitle: "Systems Programming · Full Stack · AI & ML",
  tagline: "Engineering scalable solutions at the intersection of systems thinking and modern AI.",
  email: "fahadidrees1110136@gmail.com",
  phone: "+92 320 1480611",
  location: "Samanabad, Lahore, Pakistan",
  github: "https://github.com/Fahad1110136",
  linkedin: "https://www.linkedin.com/in/fahadi-idrees",
  about: `I am a Computer Science undergraduate at FAST-NUCES, Lahore, driven by a genuine passion for building things that matter — whether that is a low-level x86 maze game running on raw BIOS interrupts or a full-stack AI-powered crypto intelligence platform. My work spans systems programming, full-stack web development, and applied machine learning, underpinned by a rigorous grounding in data structures, algorithms, and design patterns. I thrive at the boundary between theory and practice, translating complex algorithmic challenges into clean, production-ready software. Currently sharpening my expertise in AI-integrated systems and scalable architectures while pursuing competitive programming as a discipline of thought.`,
};

export const education = [
  {
    institution: "FAST-NUCES, Lahore",
    degree: "BS Computer Science",
    period: "2023 – 2027 (Expected)",
    icon: "🎓",
    description: "Pursuing a rigorous undergraduate programme with focus on systems programming, algorithms, AI/ML, and software engineering fundamentals.",
  },
  {
    institution: "Government College University, Lahore",
    degree: "FSc Pre-Engineering",
    period: "2021 – 2023",
    icon: "📐",
    description: "Completed pre-engineering studies with a strong foundation in mathematics and physics.",
  },
  {
    institution: "Crescent Model Higher Secondary School, Lahore",
    degree: "Matriculation",
    period: "2019 – 2021",
    icon: "🏫",
    description: "Completed matriculation with distinction, establishing a strong academic base.",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Elite Digital — Marketing Agency",
    type: "Upwork Freelancer",
    period: "2025",
    icon: "💼",
    description: "Designed and engineered a fully responsive digital marketing agency website from the ground up using pure HTML5 and CSS3 — zero frameworks, pure craft. Delivered a conversion-focused landing page featuring service offerings, client value propositions, and a polished contact section with contemporary agency-style branding. Implemented responsive layouts using CSS Grid and Flexbox, smooth navigational transitions, and strategically placed calls-to-action, all optimised for real-world usability and client conversion.",
    tech: ["HTML5", "CSS3", "CSS Grid", "Flexbox", "Responsive Design"],
    github: "https://github.com/Fahad1110136/EliteDigital_Frontend"
  },
];

export const academicProjects = [
  {
    title: "Maze RunnerGo",
    subtitle: "x86 Architecture · Assembly",
    description: "A BIOS interrupt-driven maze game engineered entirely in x86 Assembly — no libraries, no abstractions. Built a custom keyboard ISR, implemented direct video memory rendering for real-time graphics, designed a 5-level progressive maze system, and engineered pixel-perfect collision detection. Features a 'SupraMan' power-up mode that fundamentally alters game physics. An exercise in mastering the machine at its most fundamental level.",
    tech: ["x86 Assembly", "BIOS Interrupts", "Direct Video Memory", "Custom ISR", "Collision Detection"],
    github: "https://github.com/Fahad1110136/Maze_Runner_Go",
    icon: "🕹️",
    color: "#22c55e",
  },
  {
    title: "CryptoWise — AI Crypto Platform",
    subtitle: "Full Stack · Next.js · ML",
    description: "A full-stack intelligence platform for cryptocurrency trading built with Next.js and TypeScript. Integrates LSTM, XGBoost, and Ensemble ML models for predictive analytics, live Binance WebSocket feeds for real-time market data, a GROQ-powered conversational AI assistant, six autonomous trading bots, and NextAuth for secure authentication. A production-grade system that merges financial engineering with applied machine learning.",
    tech: ["Next.js", "TypeScript", "LSTM", "XGBoost", "Binance WebSocket", "GROQ AI", "NextAuth"],
    github: "https://github.com/Fahad1110136/CryptoWise",
    icon: "📈",
    color: "#f59e0b",
  },
  {
    title: "Talaqqi — Quran Learning Platform",
    subtitle: "Full Stack · Flask · WebRTC",
    description: "A comprehensive EdTech platform built with Flask, enabling real-time Quran learning through WebRTC video calling and WebSocket-powered live chat. Features an interactive Mushaf viewer with full annotation CRUD capabilities, role-based authentication for students and teachers, and a clean architectural foundation built on Repository and Service Layer design patterns. Bridging sacred tradition with modern educational technology.",
    tech: ["Flask", "WebRTC", "WebSockets", "Role-Based Auth", "Repository Pattern", "Service Layer"],
    github: "https://github.com/Fahad1110136/Talaqqi",
    icon: "📖",
    color: "#6366f1",
  },
  {
    title: "Multi-Source Research Assistant",
    subtitle: "NLP · RAG · Streamlit",
    description: "A RAG-powered academic research tool that unifies arXiv and PubMed APIs under a single intelligent interface. Leverages FAISS vector search for semantic similarity retrieval, flan-t5-large for abstractive summarisation, and semantic paper clustering to surface thematic connections across disparate literature. Built with a clean Streamlit interface, it fundamentally accelerates the academic literature review process.",
    tech: ["Python", "RAG", "FAISS", "flan-t5-large", "arXiv API", "PubMed API", "Streamlit"],
    github: "https://github.com/Fahad1110136/NLP-ResearchAssistant",
    icon: "🔬",
    color: "#06b6d4",
  },
  {
    title: "FLex — Course Registration Portal",
    subtitle: "Full Stack · React.js · Express.js · SQL",
    description: "A full-stack student course registration portal built with React.js and Express.js. Features JWT-based authentication for secure login and session management, an SQL Server database for robust data persistence, a dedicated admin dashboard for course and enrollment management, a complete password reset flow, and session-based secure logout. Designed for real academic use with a clean, role-aware UI.",
    tech: ["React.js", "Express.js", "Node.js", "SQL Server", "JWT Auth", "REST APIs"],
    github: "https://github.com/Fahad1110136/Flex",
    icon: "🎓",
    color: "#2dd4bf",
  }
];

export const personalProjects = [
  {
    title: "AI Anomaly Detector & Learning System",
    subtitle: "AI Safety · ChromaDB · LLM",
    description: "A self-evolving, human-in-the-loop AI safety platform engineered to detect, mitigate, and learn from AI misbehaviour in real time. Implements a semantic learning loop using ChromaDB vector embeddings to autonomously block semantically similar malicious prompts based on prior human decisions — catching obfuscated attacks that conventional regex patterns entirely miss. Features LLM-based intent classification via Llama-3.1-8B, real-time A/B comparison against raw LLMs, hallucination detection, and a risk aggregation router. Production-optimised with scalar quantization, HNSW vector indexing, and Groq/Cerebras LPU inference.",
    tech: ["Python", "ChromaDB", "Llama-3.1-8B", "HNSW Indexing", "SQLite", "Streamlit", "Groq", "Cerebras"],
    github: "https://github.com/Fahad1110136/AI-AnamolyDetector",
    icon: "🛡️",
    color: "#ef4444",
  }, 
  {
    title: "Developer Portfolio",
    subtitle: "React.js · Responsive Design · Personal Branding",
    description: "A fully responsive personal portfolio website crafted to showcase projects, skills, and professional identity. Built with React.js, the site features a clean, modern aesthetic with smooth navigational transitions, structured sections for education, experience, projects, and achievements, and a design philosophy centred on clarity and impact. Deployed on Netlify with a live domain, it serves as both a technical exhibit and a personal brand statement — engineered to make a lasting first impression.",
    tech: ["React.js", "JavaScript", "CSS3", "Responsive Design", "Netlify"],
    github: "https://github.com/Fahad1110136/Portfolio",
    live: "https://muhammadfahadidrees.netlify.app",
    icon: "💻",
    color: "#8b5cf6",
  }
];

export const skills = {
  Languages: ["C++", "C", "Python", "SQL", "Java", "HTML"],
  "Web Development": ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Node.js", "REST & FAST APIs", "MERN Stack", "SQLite"],
  "Technical": ["Data Structures & Algorithms", "OOP", "Design Patterns", "Operating Systems", "Computer Networks", "x86 Assembly", "DBMS", "AI"],
  "Data & AI/ML": ["NumPy", "Pandas", "Matplotlib", "Keras", "Sci-kit learn", "Tensorflow", "Machine Learning", "Model Training", "AI-based Design"],
  "Tools & Platforms": ["Git", "GitHub", "VS Code", "Linux", "MySQL", "Firebase", "MongoDB", "ChromaDB", "Prisma", "Streamlit"],
};

export const achievements = [
  {
    title: "3× CAA Civil Aviation Scholarship",
    detail: "HVAC — Awarded 2021, 2023 & 2026",
    icon: "🏆",
  },
  {
    title: "Runner-Up, UHE Computing Fest",
    detail: "AI Hackathon Competition — 2026",
    icon: "🥈",
  }
];
