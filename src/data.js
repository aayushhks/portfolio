export const portfolioDetails = {
    name: "Aayush Kumar",
    intro: [
        "I build intelligent, full-stack applications.",
        "I specialize in AI, machine learning, and backend systems.",
        "I transform complex data into intuitive user experiences.",
    ],
    callToActionAbout: "Learn More About Me",
    socials: {
        github: "https://github.com/aayushhks",
        linkedin: "https://linkedin.com/in/aayushhks",
    },
    email: "aayushhks03@gmail.com",
    // This is the new system prompt for the AI chatbot.
    chatbotPrompt: "You are a helpful and friendly AI assistant for Aayush Kumar's portfolio. Your goal is to answer questions about Aayush's skills, experience, and projects based on the provided resume information. Be concise, professional, and encourage the user to connect with Aayush on LinkedIn or check out his GitHub. Do not make up information. If you don't know the answer, say that the information isn't available in the resume and suggest contacting Aayush directly."
};

export const projects = [
    {
        title: "Omnix: ChatBot",
        description: "A sleek, responsive interface for a generative AI, built with React and the Vercel AI SDK.",
        tech: ["TypeScript", "Vercel AI SDK", "Tailwind"],
        liveUrl: "https://demo.chat-sdk.dev/",
        sourceUrl: "https://github.com/aayushhks/omnix-chatbot",
    },
    {
        title: "Graph Coloring with RL",
        description: "An interactive web tool to visualize graph coloring algorithms solved by a Double DQN.",
        tech: ["Python", "C", "C++"],
        liveUrl: "#",
        sourceUrl: "https://github.com/aayushhks/graph-coloring-using-reinforcement-learning",
    },
    {
        title: "IIT Delhi Anushandhan ASR",
        description: "A high-accuracy Automatic Speech Recognition API designed for multi-speaker diarization.",
        tech: ["Python","React+Vite", "WhisperX", "NVIDIA NeMo", "NLP Modules"],
        liveUrl: "#",
        sourceUrl: "https://github.com/aayushhks/iitd-anushandhan",
    },
    {
        title: "NFT Marketplace, De-Fi Hackathon",
        description: "A full-stack mobile application for trading NFTs with a novel and secure transaction solution.",
        tech: ["React Native", "MongoDB", "Express"],
        liveUrl: "#",
        sourceUrl: "https://github.com/aayushhks/de-fi-hacks",
    },
    {
        title: "Language Cognition Tool, IIT kanpur",
        description: "A psycholinguistic research platform featuring a custom NLP pipeline for automated data analysis.",
        tech: ["Python","React", "NextJs", "NLP Modules: nltk, etc.", ],
        liveUrl: "#",
        sourceUrl: "https://github.com/aayushhks/iitk-lang-cognition-lab",
    },
    {
        title: "OmniPaxos: Consensus Algorithm",
        description: "A fault-tolerant implementation of the OmniPaxos consensus algorithm, validated with simulated network failures.",
        tech: ["Go", "Distributed Systems"],
        liveUrl: "#",
        sourceUrl: "https://github.com/aayushhks/omnipaxos",
    },
    {
        title: "MapReduce",
        description: "Engineered a fault-tolerant, distributed MapReduce framework in Go, featuring a coordinator that manages worker failures\n" +
            "and task distribution via RPC.",
        tech: ["Go", "Distributed Systems"],
        liveUrl: "#",
        sourceUrl: "https://github.com/aayushhks/map-reduce",
    },
];

export const resumeData = {
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
                "Automated the end-to-end data onboarding process for equity and fixed income products by developing Python scripts for\n" +
                "data ingestion and validation from Sybase, saving 15-20 hours of manual processing per week.",
                "Deployed Python-based AI agents to automate internal workflows and data analysis tasks for the Fixed Income team.",
                "Enhanced in-house Angular-based applications by refactoring backend processes, integrating automation scripts, and de-\n" +
                "ploying optimized services on Microsoft Azure to improve scalability and operational efficiency."
            ]
        },
        {
            company: "Indian Institute of Technology, New Delhi",
            role: "Research Intern in Anushandhan(National Research Foundation)",
            duration: "Aug 2024 - Jan 2025",
            points: [
                "Engineered a multi-stage AI pipeline for a full-stack Automatic Speech Recognition (ASR) service, focusing on high-accuracy\n" +
                "transcription and speaker diarization.",
                "Transformed the research workflow by creating an automated service that converted raw audio into analysis-ready transcripts," +
                "saving researchers hundreds of hours of manual labor and enabling faster data analysis."
            ]
        },
        {
            company: "Indian Institute of Technology, Kanpur",
            role: "Research Intern in Cognitive Science",
            duration: "May 2024 - Jan 2025",
            points: [
                "Developed a full-stack psycholinguistic research tool with an integrated NLP pipeline to automate data analysis, providing\n" +
                "key data for the SHABD 3 research paper.",
                "Empowered global collaboration on an NUS funded research project by implementing a reproducible data analysis workflow" +
                "using custom Python NLP modules."
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
