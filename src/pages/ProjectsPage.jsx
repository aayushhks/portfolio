import React from 'react';
import { projects } from '../data.js';
import { GithubIcon, ExternalLinkIcon } from '../components/Icons.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

const ProjectsPage = () => (
    <AnimatedSection>
        <div className="relative z-10 flex flex-col items-start max-w-4xl w-full text-left p-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4 font-mono tracking-tight">03. Things I've Built</h2>
            <div className="w-full h-px bg-slate-700 mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:-translate-y-1">
                        <div className="flex justify-between items-center mb-4">
                            <div className="text-cyan-300">
                                {/* Placeholder for a folder icon or similar */}
                            </div>
                            <div className="flex items-center gap-4">
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                                    <GithubIcon className="w-5 h-5"/>
                                </a>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-300 transition-colors">
                                    <ExternalLinkIcon className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 h-24">{project.description}</p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
                            {project.tech.map(t => <span key={t}>{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

export default ProjectsPage;

