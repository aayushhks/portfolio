// src/pages/ProjectsPage.jsx
import React from 'react';
import { projects } from '/src/data.js';
import { GithubIcon, ExternalLinkIcon } from '/src/components/Icons.jsx';
import AnimatedSection from '/src/components/AnimatedSection.jsx';

// A new, fancy folder icon for the project cards
const FolderIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
        <title>Folder</title>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
    </svg>
);

const ProjectsPage = () => (
    <AnimatedSection>
        {/* Raised z-index so social/action icons remain tappable on small devices */}
        <div className="relative z-30 flex flex-col items-start max-w-7xl w-full text-left p-4 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-4 font-mono tracking-tight">03. Things I've Built</h2>
            <div className="w-full h-px bg-slate-700 mb-8"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transform hover:-translate-y-2 flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-cyan-300">
                                <FolderIcon />
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href={project.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-300 transition-colors pointer-events-auto"
                                    aria-label="Source Code"
                                >
                                    <GithubIcon className="w-6 h-6"/>
                                </a>
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-cyan-300 transition-colors pointer-events-auto"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLinkIcon className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-slate-200 mb-3">{project.title}</h3>
                            <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400 mt-auto pt-4">
                            {project.tech.map(t => <span key={t}>{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

export default ProjectsPage;