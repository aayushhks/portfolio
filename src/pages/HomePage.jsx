import React, { useState, useEffect } from 'react';
import { portfolioDetails } from '../data.js';

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
            <header className="mb-8">
                <p className="text-lg text-cyan-300 mb-4 font-mono">Hi, my name is</p>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-slate-200">
                    {portfolioDetails.name}.
                </h1>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-400 mt-2 h-20 md:h-24">
                    {typedText}<span className="animate-pulse text-slate-500">|</span>
                </h2>
            </header>

            <p className="max-w-xl text-slate-400 mt-6 text-lg">
                I'm a computer science student with a passion for building intelligent and performant web solutions. I transform complex problems into elegant, user-centric applications.
            </p>

            <div className="flex items-center gap-6 mt-12">
                <button
                    onClick={() => onNavigate('about')}
                    className="px-6 py-2 font-medium tracking-wider text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
                >
                    {portfolioDetails.callToActionAbout}
                </button>
            </div>
        </div>
    );
};

export default HomePage;
