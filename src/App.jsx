import React from 'react';

// You can replace these with your actual details
const portfolioDetails = {
    name: "Aayush Kumar",
    title: "Software Engineer | AI Researher",
    callToAction: "Explore My Universe",
    socials: {
        github: "https://github.com/aayushhks",
        linkedin: "https://linkedin.com/in/aayushhks",
        // twitter: "https://twitter.com",
    }
};

// SVG Icon Components for social links
const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
);


// Starry background component
const StarryBackground = () => {
    // Generate a fixed number of stars for a consistent look
    const stars = Array.from({ length: 150 }, (_, i) => {
        const style = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 2}s`,
        };
        return <div key={i} className="absolute bg-white rounded-full star-twinkle" style={style}></div>;
    });

    return <div className="absolute inset-0 z-0">{stars}</div>;
};

export default function App() {
    return (
        <>
            {/* Injecting keyframes for the star twinkle animation */}
            <style>
                {`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.7; transform: scale(0.9); }
                        50% { opacity: 1; transform: scale(1); }
                    }
                    .star-twinkle {
                        animation-name: twinkle;
                        animation-timing-function: ease-in-out;
                        animation-iteration-count: infinite;
                    }
                    .text-glow {
                        text-shadow: 0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(190, 228, 255, 0.6);
                    }
                `}
            </style>

            {/* Main container */}
            <main className="relative flex flex-col items-center justify-center w-full h-screen bg-slate-900 text-white overflow-hidden">
                <StarryBackground />

                {/* A subtle nebula/galaxy effect in the background */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
                    <header className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-glow bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                            {portfolioDetails.name}
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-cyan-200 tracking-wide">
                            {portfolioDetails.title}
                        </p>
                    </header>

                    <a
                        href="#projects"
                        className="px-8 py-3 mt-6 font-semibold text-white transition-all duration-500 border-2 border-white rounded-full hover:bg-white hover:text-slate-900 hover:shadow-2xl hover:shadow-cyan-400/50 transform hover:scale-105"
                    >
                        {portfolioDetails.callToAction}
                    </a>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-6 mt-12">
                        <a href={portfolioDetails.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
                            <GithubIcon />
                        </a>
                        <a href={portfolioDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
                            <LinkedinIcon />
                        </a>
                        <a href={portfolioDetails.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>

                {/* Footer element for attribution or extra info */}
                <footer className="absolute bottom-4 text-center text-sm text-gray-500 z-10">
                    <p>Designed with a passion for the cosmos.</p>
                </footer>
            </main>
        </>
    );
}
