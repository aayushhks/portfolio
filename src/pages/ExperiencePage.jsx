import React from 'react';
import { resumeData } from '../data.js';

const ExperiencePage = () => (
    <div className="relative z-10 flex flex-col items-start max-w-4xl w-full text-left p-4 animate-fade-in">
        <h2 className="text-3xl font-bold text-slate-200 mb-4">02. Where I've Worked</h2>
        <div className="w-full h-px bg-slate-700 mb-8"></div>
        <div className="w-full space-y-8">
            {resumeData.experience.map((exp, i) => (
                <div key={i}>
                    <h3 className="text-xl font-semibold text-slate-200">{exp.role} at <span className="text-cyan-300">{exp.company}</span></h3>
                    <p className="text-slate-400 text-sm mb-3 font-mono">{exp.duration}</p>
                    <ul className="list-disc list-inside space-y-2 text-slate-400">
                        {exp.points.map((point, j) => <li key={j}>{point}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default ExperiencePage;

