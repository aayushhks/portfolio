import React, { useState, useEffect } from 'react';
import GridBackground from './components/GridBackground';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import Chatbot from './components/Chatbot'; // Import the Chatbot component
import { useChat } from './hooks/useChat';   // Import the chat logic hook
import { portfolioDetails } from './data';

export default function App() {
    const getInitialView = () => {
        const hash = window.location.hash.replace('#', '');
        const validViews = ['home', 'about', 'experience', 'projects', 'contact', 'resume'];
        return validViews.includes(hash) ? hash : 'home';
    };

    const [currentView, setCurrentView] = useState(getInitialView);
    const chatHook = useChat(); // Initialize the chat hook

    const handleNavigate = (view) => {
        if (view === 'contact') {
            window.location.href = `mailto:${portfolioDetails.email}`;
        } else {
            setCurrentView(view);
        }
    };

    useEffect(() => {
        const handlePopState = (event) => {
            const view = event.state?.view || 'home';
            setCurrentView(view);
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useEffect(() => {
        const path = currentView === 'home' ? ' ' : `#${currentView}`;
        const currentPath = window.location.hash.replace('#','') || 'home';
        if (currentView !== currentPath) {
            window.history.pushState({ view: currentView }, '', path);
        }
    }, [currentView]);

    const renderView = () => {
        switch (currentView) {
            case 'about':
                return <AboutPage />;
            case 'experience':
                return <ExperiencePage />;
            case 'projects':
                return <ProjectsPage />;
            case 'contact':
                return <ContactPage />;
            case 'resume':
                return <ResumePage />;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <>
            <style>{`
                .text-glow { text-shadow: 0 0 8px rgba(255, 255, 255, 0.5), 0 0 20px rgba(190, 228, 255, 0.6); }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                }
            `}</style>

            <main className="relative flex flex-col items-center w-full min-h-screen bg-slate-900 text-white overflow-x-hidden">
                <GridBackground />
                <Navbar currentView={currentView} onNavigate={handleNavigate} />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

                <div className="w-full flex justify-center min-h-screen pt-32 sm:pt-48 pb-24 px-4">
                    <div className="animate-fade-in w-full max-w-4xl">
                        {renderView()}
                    </div>
                </div>

                {/* Add the Chatbot component here */}
                <Chatbot useChatHook={chatHook} />
            </main>
        </>
    );
}

