import React, { useState, useEffect } from 'react';
import { AKLogo, MenuIcon, CloseIcon } from './Icons';
import MobileMenu from './MobileMenu';

const NavLink = ({ number, text, isActive, onClick }) => (
    <button onClick={onClick} className="group relative flex items-center gap-2 py-2 text-slate-300 transition-colors">
        <span className={`text-sm font-mono transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-slate-400'} group-hover:text-cyan-300`}>
            0{number}.
        </span>
        <span className={`text-md transition-colors duration-300 ${isActive ? 'text-cyan-300' : 'text-slate-300'} group-hover:text-cyan-300`}>
            {text}
        </span>
        <span className={`absolute bottom-0 left-0 h-px bg-cyan-300 transition-all duration-300 ease-in-out ${isActive ? 'w-full' : 'w-0'} group-hover:w-full`}></span>
    </button>
);

const Navbar = ({ currentView, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Effect to prevent body scrolling when the mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMobileMenuOpen]);

    const handleNavigate = (view) => {
        onNavigate(view);
        setIsMobileMenuOpen(false); // Ensure menu closes on navigation
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-[60] px-4 sm:px-8 py-4 backdrop-blur-md bg-slate-900/80">
                <nav className="flex items-center justify-between max-w-7xl mx-auto">
                    <button onClick={() => handleNavigate('home')} className="text-cyan-300 transition-transform duration-300 hover:scale-105" aria-label="Go to homepage">
                        <AKLogo />
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 font-mono">
                        <NavLink number={1} text="About" isActive={currentView === 'about'} onClick={() => handleNavigate('about')} />
                        <NavLink number={2} text="Experience" isActive={currentView === 'experience'} onClick={() => handleNavigate('experience')} />
                        <NavLink number={3} text="Projects" isActive={currentView === 'projects'} onClick={() => handleNavigate('projects')} />
                        <NavLink number={4} text="Contact" isActive={currentView === 'contact'} onClick={() => handleNavigate('contact')} />
                        <button
                            onClick={() => handleNavigate('resume')}
                            className="ml-4 px-4 py-2 text-sm font-medium text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
                        >
                            Resume
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden z-50 text-cyan-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </nav>
            </header>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onNavigate={handleNavigate}
                onClose={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;

