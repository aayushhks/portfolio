import React, { useState, useEffect } from 'react';
import GridBackground from './components/GridBackground.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx';

export default function App() {
    // Determine the initial view from the URL hash, defaulting to 'home'
    const getInitialView = () => {
        const hash = window.location.hash.replace('#', '');
        const validViews = ['home', 'about', 'experience', 'projects', 'contact', 'resume'];
        return validViews.includes(hash) ? hash : 'home';
    };

    const [currentView, setCurrentView] = useState(getInitialView);

    // This effect SYNCS the browser's back/forward buttons with the app's state.
    useEffect(() => {
        const handlePopState = (event) => {
            // When the user clicks back/forward, the 'popstate' event fires.
            // We read the view from the state we pushed earlier and update our component.
            const view = event.state?.view || 'home';
            setCurrentView(view);
        };

        // Listen for browser navigation events
        window.addEventListener('popstate', handlePopState);

        // Cleanup the listener when the component unmounts
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []); // The empty array ensures this effect runs only once.

    // This effect UPDATES the browser's URL when the app's state changes.
    useEffect(() => {
        // This ensures that when we navigate within the app, the URL changes too.
        const path = currentView === 'home' ? ' ' : `#${currentView}`;
        const currentPath = window.location.hash.replace('#','') || 'home';

        if (currentView !== currentPath) {
            window.history.pushState({ view: currentView }, '', path);
        }
    }, [currentView]); // This runs every time 'currentView' changes.

    // Helper function to render the current page component
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
                return <HomePage onNavigate={setCurrentView} />;
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
                <Navbar currentView={currentView} onNavigate={setCurrentView} />

                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>

                <div className="w-full flex justify-center min-h-screen pt-32 sm:pt-48 pb-24 px-4">
                    <div className="animate-fade-in w-full max-w-4xl">
                        {renderView()}
                    </div>
                </div>
            </main>
        </>
    );
}

