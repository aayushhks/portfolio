import React, { useState, useEffect } from 'react';
import { portfolioDetails } from '../data.js';
import { GithubIcon, LinkedinIcon } from '../components/Icons.jsx';

// A custom hook for the typewriter effect
const useTypewriter = (sentences) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = sentences[currentIndex % sentences.length];
            if (isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            } else {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }
            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentIndex((prev) => prev + 1);
            }
        };
        const typingSpeed = isDeleting ? 75 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentIndex, sentences]);

    return currentText;
};

const HomePage = ({ onNavigate }) => {
    const typedText = useTypewriter(portfolioDetails.intro);

    return (
        <div className="relative z-10 flex flex-col items-start justify-center w-full text-left">
            <header className="mb-6">
                <p className="text-md sm:text-lg text-cyan-300 mb-4 font-mono">Hi, my name is</p>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-slate-200">
                    {portfolioDetails.name}.
                </h1>
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-slate-400 mt-2 h-16 sm:h-20 md:h-24">
                    {typedText}<span className="animate-pulse text-slate-500">|</span>
                </h2>
            </header>

            <p className="max-w-xl text-slate-400 text-base sm:text-lg">
                Software engineer by day, AI trainer by night. I build smart, full-stack AI powered applications and ML models that solve problems, produce results and occasionally question the nature of their own existence. My code is clean, my models are learning, and my coffee is strong.
            </p>

            <div className="flex items-center gap-6 mt-10">
                <button
                    onClick={() => onNavigate('about')}
                    className="px-6 py-2 font-medium tracking-wider text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
                >
                    {portfolioDetails.callToActionAbout}
                </button>
            </div>

            {/* Social Links Section */}
            <div className="flex items-center gap-6 mt-12">
                <a
                    href={portfolioDetails.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300"
                >
                    <GithubIcon className="w-6 h-6" />
                </a>
                <a
                    href={portfolioDetails.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="text-slate-400 hover:text-cyan-300 transition-colors duration-300"
                >
                    <LinkedinIcon className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default HomePage;

