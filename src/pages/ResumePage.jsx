import React from 'react';
import { portfolioDetails, resumeData } from '../data.js';
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/Icons.jsx';

const ResumePage = ({ onNavigate }) => (
    <div className="relative z-10 w-full max-w-4xl p-4 sm:p-8 text-white animate-fade-in">
        {/* Page Header */}
        <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-glow">{portfolioDetails.name}</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-slate-300">
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <MailIcon className="w-5 h-5" /> {resumeData.contact.email}
                </a>
                <a href={portfolioDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                    <LinkedinIcon /> LinkedIn
                </a>
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
                    <div key={i} className="mb-4 last:mb-0">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-xl font-semibold text-white">{edu.university}</h3>
                            <p className="font-medium text-slate-400 text-sm">{edu.duration}</p>
                        </div>
                        <p className="text-slate-300">{edu.degree}</p>
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
                            <p className="text-slate-400 text-sm">{skills}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience Section */}
            <section>
                <h2 className="text-2xl font-bold text-cyan-200 border-b-2 border-slate-700 pb-2 mb-4">Professional Experience</h2>
                {resumeData.experience.map((exp, i) => (
                    <div key={i} className="mb-6 last:mb-0">
                        <div className="flex justify-between items-baseline">
                            <h3 className="text-xl font-semibold text-white">{exp.role} at {exp.company}</h3>
                            <p className="font-medium text-slate-400 text-sm">{exp.duration}</p>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-slate-300 mt-1">
                            {exp.points.map((point, j) => <li key={j}>{point}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Academic Projects Section */}
            <section>
                <h2 className="text-2xl font-bold text-cyan-200 border-b-2 border-slate-700 pb-2 mb-4">Academic Projects</h2>
                {resumeData.projects.map((proj, i) => (
                    <div key={i} className="mb-4 last:mb-0">
                        <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
                        <p className="text-slate-300">{proj.description}</p>
                    </div>
                ))}
            </section>
        </div>

        {/* Navigation back to home */}
        <div className="text-center mt-16">
            <button onClick={() => onNavigate('home')} className="text-cyan-200 hover:text-white transition-colors underline underline-offset-4">
                &larr; Back to Home
            </button>
        </div>
    </div>
);

export default ResumePage;

