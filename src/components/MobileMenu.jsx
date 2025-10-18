// javascript
// src/components/MobileMenu.jsx
import React from 'react';
import { motion as Motion } from 'framer-motion';
import { CloseIcon } from './Icons';

const MobileNavLink = ({ number, text, onClick }) => (
    <Motion.button
        type="button"
        variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: 20, opacity: 0 }
        }}
        onClick={onClick}
        className="flex flex-col items-center gap-1 text-slate-300 cursor-pointer"
    >
        <span className="text-sm font-mono text-cyan-300">0{number}.</span>
        <span className="text-xl">{text}</span>
    </Motion.button>
);

const MobileMenu = ({ isOpen, onNavigate, onClose }) => {
    const handleNavigation = (view) => {
        onNavigate(view);
        onClose();
    };

    return (
        <>
            <Motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { opacity: 1, pointerEvents: 'auto' },
                    closed: { opacity: 0, pointerEvents: 'none' }
                }}
                transition={{ duration: 0.3 }}
                onClick={onClose}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] lg:hidden"
            ></Motion.div>

            <Motion.div
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: { x: 0 },
                    closed: { x: "100%" }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onClick={(e) => e.stopPropagation()}
                className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-slate-800 shadow-2xl z-[80] flex flex-col items-center justify-center lg:hidden"
            >
                {/* Close button inside the panel so it remains visible */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 z-[90] p-2 text-slate-100 hover:text-cyan-300"
                >
                    <CloseIcon className="h-6 w-6" />
                </button>

                <Motion.div
                    variants={{
                        open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                        closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                    }}
                    className="flex flex-col items-center gap-8"
                >
                    <MobileNavLink number={1} text="About" onClick={() => handleNavigation('about')} />
                    <MobileNavLink number={2} text="Experience" onClick={() => handleNavigation('experience')} />
                    <MobileNavLink number={3} text="Projects" onClick={() => handleNavigation('projects')} />
                    <MobileNavLink number={4} text="Contact" onClick={() => handleNavigation('contact')} />
                    <Motion.div
                        variants={{
                            open: { y: 0, opacity: 1 },
                            closed: { y: 20, opacity: 0 }
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => handleNavigation('resume')}
                            className="mt-4 cursor-pointer px-6 py-2 text-md font-medium font-mono text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
                        >
                            Resume
                        </button>
                    </Motion.div>
                </Motion.div>
            </Motion.div>
        </>
    );
};

export default MobileMenu;
