import React from 'react';
import { AKLogo } from './Icons';

// Updated NavLink with an animated underline effect on hover
const NavLink = ({ number, text, isActive, onClick }) => (
    <button onClick={onClick} className="group relative flex items-center gap-2 py-2 text-slate-300 transition-colors">
        <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-slate-400'} group-hover:text-cyan-300`}>
            0{number}.
        </span>
        <span className={`text-md transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-slate-300'} group-hover:text-cyan-300`}>
            {text}
        </span>
        {/* The animated underline */}
        <span
            className={`absolute bottom-0 left-0 h-px bg-cyan-300 transition-all duration-300 ease-in-out ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}
        ></span>
    </button>
);

const Navbar = ({ currentView, onNavigate }) => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-8 py-4 backdrop-blur-md bg-slate-900/80 shadow-lg shadow-black/20">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <button onClick={() => onNavigate('home')} className="text-cyan-300 transition-transform duration-300 hover:scale-105" aria-label="Go to homepage">
                    <AKLogo />
                </button>
                <div className="hidden md:flex items-center gap-6">
                    <NavLink number={1} text="About" isActive={currentView === 'about'} onClick={() => onNavigate('about')} />
                    <NavLink number={2} text="Experience" isActive={currentView === 'experience'} onClick={() => onNavigate('experience')} />
                    <NavLink number={3} text="Projects" isActive={currentView === 'projects'} onClick={() => onNavigate('projects')} />
                    <NavLink number={4} text="Contact" isActive={currentView === 'contact'} onClick={() => onNavigate('contact')} />
                    <button
                        onClick={() => onNavigate('resume')}
                        className="ml-4 px-4 py-2 text-sm font-medium font-mono text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
                    >
                        Resume
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

