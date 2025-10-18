import React, { useState, useEffect } from 'react';
import GridBackground from './components/GridBackground.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';
import Chatbot from './components/Chatbot';
import { useChat } from './hooks/useChat';
import { portfolioDetails } from './data';

export default function App() {
    const getInitialView = () => {
        const hash = window.location.hash.replace('#', '');
        const validViews = ['home', 'about', 'experience', 'projects', 'contact', 'resume'];
        return validViews.includes(hash) ? hash : 'home';
    };

    const [currentView, setCurrentView] = useState(getInitialView);
    const chatHook = useChat();

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
                /* ... existing styles ... */
            `}</style>

            <main className="relative flex flex-col items-center w-full min-h-screen bg-slate-900 text-white overflow-x-hidden">
                <GridBackground /> {}
                <Navbar currentView={currentView} onNavigate={handleNavigate} />

                {/* Removed the nebula glows to keep the background clean with the planet animation */}

                <div className="w-full flex justify-center min-h-screen pt-32 sm:pt-48 pb-24 px-4">
                    <div className="animate-fade-in w-full max-w-4xl">
                        {renderView()}
                    </div>
                </div>

                <Chatbot useChatHook={chatHook} />
            </main>
        </>
    );
}

