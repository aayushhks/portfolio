import React from 'react';
import { portfolioDetails, resumeData } from '/src/data.js';
import { GithubIcon, LinkedinIcon, MailIcon } from '/src/components/Icons.jsx';
import AnimatedSection from '/src/components/AnimatedSection.jsx'; // Import the new component

const ResumePage = () => (
    <div className="relative z-10 w-full max-w-4xl p-4 sm:p-8 text-white">
        <header className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-200">{portfolioDetails.name}</h1>
            <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-slate-300">
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
            <AnimatedSection>
                <section>
                    <h2 className="text-2xl font-bold text-cyan-300 border-b-2 border-slate-700 pb-2 mb-4 font-mono">Education</h2>
                    {resumeData.education.map((edu, i) => (
                        <div key={i} className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-xl font-semibold text-slate-200">{edu.university}</h3>
                                <p className="font-medium text-slate-400 text-sm font-mono">{edu.duration}</p>
                            </div>
                            <p className="text-slate-300">{edu.degree}</p>
                            <p className="text-sm text-slate-400 mt-1">{edu.details}</p>
                        </div>
                    ))}
                </section>
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection delay={0.2}>
                <section>
                    <h2 className="text-2xl font-bold text-cyan-300 border-b-2 border-slate-700 pb-2 mb-4 font-mono">Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {Object.entries(resumeData.skills).map(([category, skills]) =>(
                            <div key={category}>
                                <h3 className="text-lg font-semibold text-slate-200">{category}</h3>
                                <p className="text-slate-400">{skills}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </AnimatedSection>

            {/* Experience Section */}
            <AnimatedSection delay={0.4}>
                <section>
                    <h2 className="text-2xl font-bold text-cyan-300 border-b-2 border-slate-700 pb-2 mb-4 font-mono">Experience</h2>
                    {resumeData.experience.map((exp, i) => (
                        <div key={i} className="mb-6">
                            <h3 className="text-xl font-semibold text-slate-200">{exp.role} at {exp.company}</h3>
                            <p className="text-slate-400 text-sm mb-2 font-mono">{exp.duration}</p>
                            <ul className="list-disc list-inside space-y-1 text-slate-300">
                                {exp.points.map((point, j) => <li key={j}>{point}</li>)}
                            </ul>
                        </div>
                    ))}
                </section>
            </AnimatedSection>
        </div>
    </div>
);

export default ResumePage;
