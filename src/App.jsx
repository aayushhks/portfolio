import React, { useState } from 'react';

// You can replace these with your actual details
const portfolioDetails = {
    name: "Aayush Kumar",
    title: "Software and AI/ML Engineer",
    callToAction: "Explore My Universe",
    socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
    }
};

const projects = [
    {
        title: "Project Alpha",
        description: "A web application for real-time data visualization, built with a focus on performance and user experience.",
        tech: ["React", "D3.js", "Node.js", "Firebase"],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project Beta",
        description: "An e-commerce platform with a custom CMS, designed for a seamless shopping journey from discovery to checkout.",
        tech: ["Next.js", "Stripe", "GraphQL", "PostgreSQL"],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project Gamma",
        description: "A mobile-first social networking app that connects users based on shared interests and location.",
        tech: ["React Native", "Express", "MongoDB", "Socket.io"],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project Delta",
        description: "A collaborative whiteboard application with real-time updates for team brainstorming sessions.",
        tech: ["Vue.js", "WebSockets", "Canvas API", "Redis"],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project Epsilon",
        description: "A minimalist blog platform with a focus on typography and readability, using a headless CMS.",
        tech: ["SvelteKit", "Sanity.io", "Tailwind CSS"],
        liveUrl: "#",
        sourceUrl: "#",
    },
    {
        title: "Project Zeta",
        description: "An interactive educational game for learning programming concepts through visual puzzles.",
        tech: ["Three.js", "React", "Framer Motion"],
        liveUrl: "#",
        sourceUrl: "#",
    },
];

const resumeData = {
    contact: {
        phone: "+1 857 540 0390",
        email: "aayushhks03@gmail.com",
    },
    education: [
        {
            university: "Boston University",
            degree: "Master of Science, Computer Science",
            duration: "Expected Dec 2026",
            details: "Coursework: Advanced Algorithms, Distributed Systems, Deep Learning, Object Oriented Design."
        },
        {
            university: "Manipal University Jaipur",
            degree: "Bachelor of Technology, Computer Science",
            duration: "July 2025",
            details: "GPA: 3.59. Coursework: Data Structures, AI, Machine Learning, Software Engineering."
        }
    ],
    skills: {
        "Programming Languages": "Python, Go, C, C++, TypeScript/JavaScript, Java, SQL",
        "Libraries / Frameworks": "Next.js, React/React Native, Node.js, Flask, PyTorch, Vercel AI SDK, Tailwind CSS",
        "Tools / Platforms": "Git, Docker, Linux, Postman, Tableau, Vercel, Vite.js",
        "Databases": "PostgreSQL, MongoDB"
    },
    experience: [
        {
            company: "BlackRock",
            role: "Software Engineer, Backend, Analyst",
            duration: "Jan 2025 - Aug 2025",
            points: [
                "Automated end-to-end data onboarding for equity and fixed income products using Python, saving 15-20 manual hours weekly.",
                "Deployed Python-based AI agents to automate internal workflows and data analysis tasks."
            ]
        },
        {
            company: "Indian Institute of Technology, New Delhi",
            role: "Research Intern",
            duration: "Aug 2024 - Jan 2025",
            points: [
                "Engineered a multi-stage AI pipeline for a full-stack Automatic Speech Recognition (ASR) service."
            ]
        },
        {
            company: "Indian Institute of Technology, Kanpur",
            role: "Research Intern",
            duration: "May 2024 - Jan 2025",
            points: [
                "Developed a full-stack psycholinguistic research tool with an integrated NLP pipeline for the 'SHABD 3' research paper."
            ]
        }
    ],
    projects: [
        {
            title: "Graph Coloring using Reinforcement Learning",
            description: "Developed a Double DQN system in PyTorch to solve the NP-hard graph coloring problem, achieving near real-time performance."
        },
        {
            title: "Omnix; Chatbot",
            description: "Engineered a generative AI chatbot using Vercel's AI SDK supporting Google Gemini, OpenAI, and Anthropic with NextAuth.js security."
        },
        {
            title: "Anushandhan Research Project, IIT Delhi",
            description: "Developed a transcription API using WhisperX and NVIDIA NeMo, enhancing accuracy with Demucs vocal isolation."
        }
    ]
};

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);
const MailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
);

// --- UI COMPONENTS ---

const StarryBackground = () => {
    const stars = Array.from({ length: 250 }, (_, i) => {
        const style = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 5 + 3}s`,
        };
        return <div key={i} className="absolute bg-white rounded-full star-twinkle" style={style}></div>;
    });
    return <div className="absolute inset-0 z-0">{stars}</div>;
};

const HomePage = ({ onNavigate }) => (
    <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        <header className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-glow bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                {portfolioDetails.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-cyan-200 tracking-wide">
                {portfolioDetails.title}
            </p>
        </header>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button
                onClick={() => onNavigate('projects')}
                className="px-8 py-3 font-semibold text-white transition-all duration-500 border-2 border-white rounded-full hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-cyan-400/50 transform hover:scale-105"
            >
                {portfolioDetails.callToAction}
            </button>
            <button
                onClick={() => onNavigate('resume')}
                className="px-8 py-3 font-semibold text-cyan-200 transition-all duration-500 border-2 border-cyan-200 rounded-full hover:bg-cyan-200 hover:text-slate-900 hover:shadow-2xl hover:shadow-cyan-400/50 transform hover:scale-105"
            >
                View Resume
            </button>
        </div>

        <div className="flex items-center gap-6 mt-12">
            <a href={portfolioDetails.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><GithubIcon /></a>
            <a href={portfolioDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><LinkedinIcon /></a>
            <a href={portfolioDetails.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110"><TwitterIcon /></a>
        </div>
    </div>
);

const ProjectsPage = ({ onNavigate }) => (
    <div className="relative z-10 w-full max-w-6xl p-4 sm:p-8 text-white">
        <header className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-glow">My Constellation of Projects</h2>
            <p className="mt-4 text-lg text-cyan-200">A collection of my work and explorations.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20 transform hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-slate-300 mb-4 h-24">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map(t => <span key={t} className="bg-slate-700 text-cyan-200 text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
                    </div>
                    <div className="flex items-center justify-end gap-4">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                            <ExternalLinkIcon /> Live Demo
                        </a>
                        <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors">
                            <GithubIcon /> Source
                        </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="text-center mt-16">
            <button onClick={() => onNavigate('home')} className="text-cyan-200 hover:text-white transition-colors underline underline-offset-4">
                &larr; Back to Home
            </button>
        </div>
    </div>
);

const ResumePage = ({ onNavigate }) => (
    <div className="relative z-10 w-full max-w-4xl p-4 sm:p-8 text-white">
        <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-glow">{portfolioDetails.name}</h1>
            <div className="flex items-center justify-center gap-6 mt-4 text-slate-300">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <MailIcon className="w-5 h-5" /> {resumeData.contact.email}
                </a>
                <span>&bull;</span>
                <a href={portfolioDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <LinkedinIcon /> LinkedIn
                </a>
                <span>&bull;</span>
                <a href={portfolioDetails.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <GithubIcon /> GitHub
                </a>
            </div>
        </header>

        <div className="space-y-10">
            {/* Education Section */}
            <section>
                <h2 className="text-2xl font-bold text-cyan-200 border-b-2 border-slate-700 pb-2 mb-4">Education</h2>
                {resumeData.education.map((edu, i) => (
                    <div key={i} className="mb-4">
                        <h3 className="text-xl font-semibold text-white">{edu.university}</h3>
                        <p className="text-slate-300 flex justify-between">
                            <span>{edu.degree}</span>
                            <span className="font-medium text-slate-400">{edu.duration}</span>
                        </p>
                        <p className="text-sm text-slate-400 mt-1">{edu.details}</p>
                    </div>
                ))}
            </section>

            {/* Skills Section */}
            <section>
                <h2 className="text-2xl font-bold text-cyan-200 border-b-2 border-slate-700 pb-2 mb-4">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {Object.entries(resumeData.skills).map(([category, skills]) =>(
                        <div key={category}>
                            <h3 className="text-lg font-semibold text-white">{category}</h3>
                            <p className="text-slate-400">{skills}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section>
                <h2 className="text-2xl font-bold text-cyan-200 border-b-2 border-slate-700 pb-2 mb-4">Professional Experience</h2>
                {resumeData.experience.map((exp, i) => (
                    <div key={i} className="mb-6">
                        <h3 className="text-xl font-semibold text-white">{exp.role} at {exp.company}</h3>
                        <p className="text-slate-400 text-sm mb-2">{exp.duration}</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                            {exp.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projects Section */}
            <section>
                <h2 className="text-2xl font-bold text-cyan-200 border-b-2 border-slate-700 pb-2 mb-4">Academic Projects</h2>
                {resumeData.projects.map((proj, i) => (
                    <div key={i} className="mb-4">
                        <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
                        <p className="text-slate-300">{proj.description}</p>
                    </div>
                ))}
            </section>
        </div>

        <div className="text-center mt-16">
            <button onClick={() => onNavigate('home')} className="text-cyan-200 hover:text-white transition-colors underline underline-offset-4">
                &larr; Back to Home
            </button>
        </div>
    </div>
);


// --- MAIN APP COMPONENT ---

export default function App() {
    const [currentView, setCurrentView] = useState('home');

    return (
        <>
            <style>
                {`
                    @keyframes twinkle { 0%, 100% { opacity: 0.7; transform: scale(0.9); } 50% { opacity: 1; transform: scale(1); } }
                    .star-twinkle { animation: twinkle ease-in-out infinite; }
                    .text-glow { text-shadow: 0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(190, 228, 255, 0.6); }
                `}
            </style>

            <main className="relative flex flex-col items-center w-full min-h-screen bg-slate-900 text-white overflow-y-auto overflow-x-hidden p-4">
                <div className="absolute top-0 left-0 w-full h-full"><StarryBackground /></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

                <div className="flex items-center justify-center w-full min-h-screen">
                    {currentView === 'home' && <HomePage onNavigate={setCurrentView} />}
                    {currentView === 'projects' && <ProjectsPage onNavigate={setCurrentView} />}
                    {currentView === 'resume' && <ResumePage onNavigate={setCurrentView} />}
                </div>

                <footer className="absolute bottom-4 text-center text-sm text-gray-500 z-10">
                    <p>Designed with a passion for the cosmos.</p>
                </footer>
            </main>
        </>
    );
}