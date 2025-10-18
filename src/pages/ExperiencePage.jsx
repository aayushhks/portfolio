import React from 'react';
import { resumeData } from '/src/data.js';
import AnimatedSection from '/src/components/AnimatedSection.jsx';

const ExperiencePage = () => (
    <AnimatedSection>
        <div className="relative z-10 flex flex-col items-start max-w-4xl w-full text-left p-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4 font-mono tracking-tight">02. Where I've Worked</h2>
            <div className="w-full h-px bg-slate-700 mb-8"></div>
            <div className="w-full space-y-8">
                {resumeData.experience.map((exp, i) => (
                    <div key={i}>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-200">{exp.role} at <span className="text-cyan-300">{exp.company}</span></h3>
                        <p className="text-slate-400 text-xs sm:text-sm mb-3 font-mono">{exp.duration}</p>
                        <ul className="list-disc list-inside space-y-2 text-slate-400 text-base">
                            {exp.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

export default ExperiencePage;

