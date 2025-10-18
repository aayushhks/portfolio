import React from 'react';
import AnimatedSection from '/src/components/AnimatedSection.jsx';

const AboutPage = () => (
    <AnimatedSection>
        <div className="relative z-10 flex flex-col items-start max-w-4xl w-full text-left p-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4 font-mono tracking-tight">01. About Me</h2>
            <div className="w-full h-px bg-slate-700 mb-8"></div>
            <div className="space-y-4 text-slate-400 text-base sm:text-lg">
                <p>
                    Hello! I'm Aayush, a computer science student passionate about creating intelligent and beautiful applications on the web. My interest in AI and development started back in university, where I discovered the power of combining code with creative problem-solving.
                </p>
                <p>
                    Today, I'm focused on deepening my expertise in distributed systems, machine learning, and building scalable, user-centric products that have a real-world impact.
                </p>
            </div>
        </div>
    </AnimatedSection>
);

export default AboutPage;

