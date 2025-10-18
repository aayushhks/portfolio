import React from 'react';
import { motion } from 'framer-motion';

const MobileNavLink = ({ number, text, onClick }) => (
    <motion.button
        variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: 20, opacity: 0 }
        }}
        onClick={onClick}
        className="flex flex-col items-center gap-1 text-slate-300"
    >
        <span className="text-sm font-mono text-cyan-300">0{number}.</span>
        <span className="text-xl">{text}</span>
    </motion.button>
);

const MobileMenu = ({ isOpen, onNavigate, onClose }) => {
    const handleNavigation = (view) => {
        onNavigate(view);
        onClose();
    };

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={{
                open: { opacity: 1, x: 0 },
                closed: { opacity: 0, x: "100%" }
            }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-slate-800/90 backdrop-blur-md z-40 flex flex-col items-center justify-center"
        >
            <motion.div
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
                <motion.button
                    variants={{
                        open: { y: 0, opacity: 1 },
                        closed: { y: 20, opacity: 0 }
                    }}
                    onClick={() => handleNavigation('resume')}
                    className="mt-4 px-6 py-2 text-md font-medium font-mono text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
                >
                    Resume
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default MobileMenu;
