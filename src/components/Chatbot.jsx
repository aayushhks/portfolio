import React, { useState, useRef, useEffect } from 'react';

// New, more modern icons for the AI theme
const SparklesIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 3L9.27 9.27L3 12l6.27 2.73L12 21l2.73-6.27L21 12l-6.27-2.73L12 3z" />
        <path d="M3 3v2M21 3v2M3 21v-2M21 21v-2" />
    </svg>
);
const ArrowUpIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
);
const CloseIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Chatbot = ({ useChatHook }) => {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChatHook;
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            <style>{`
                @keyframes soft-glow-pulse {
                    0%, 100% {
                        box-shadow: 0 0 10px 0px rgba(22, 163, 175, 0.3), 0 0 20px 0px rgba(22, 163, 175, 0.2);
                    }
                    50% {
                        box-shadow: 0 0 20px 5px rgba(22, 163, 175, 0), 0 0 40px 10px rgba(22, 163, 175, 0);
                    }
                }
                .animate-soft-glow-pulse {
                    animation: soft-glow-pulse 2.5s infinite ease-in-out;
                }
            `}</style>
            <div className="fixed bottom-8 right-8 z-50">
                {/* Chat Window */}
                <div className={`w-96 h-[32rem] flex flex-col bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b border-slate-700">
                        <h3 className="font-mono text-md text-white flex items-center gap-2">
                            <SparklesIcon className="w-5 h-5 text-cyan-300" />
                            AI Assistant
                        </h3>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                            <CloseIcon className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex items-start gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {m.role === 'assistant' && <div className="w-8 h-8 flex-shrink-0 bg-slate-700 rounded-full flex items-center justify-center"><SparklesIcon className="w-5 h-5 text-cyan-300" /></div>}
                                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${m.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 flex-shrink-0 bg-slate-700 rounded-full flex items-center justify-center"><SparklesIcon className="w-5 h-5 text-cyan-300" /></div>
                                <div className="p-3 rounded-lg bg-slate-700 text-slate-200">
                                    <div className="flex items-center gap-1">
                                        <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-slate-400 rounded-full animate-pulse"></span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Form */}
                    <form onSubmit={handleSubmit} className="p-3 border-t border-slate-700 flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Ask me anything..."
                            className="flex-1 bg-slate-700 text-white placeholder-slate-400 text-sm px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                        <button type="submit" className="bg-slate-700 text-white p-2 rounded-lg hover:bg-slate-600 disabled:text-slate-500" disabled={isLoading || !input}>
                            <ArrowUpIcon className="w-5 h-5" />
                        </button>
                    </form>
                </div>

                {/* Chat Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`mt-4 float-right p-3 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'opacity-0 scale-75' : 'opacity-100 scale-100'} bg-slate-800 border border-slate-700 text-cyan-300 hover:border-cyan-300 animate-soft-glow-pulse`}
                    aria-label="Toggle Chat"
                >
                    <SparklesIcon />
                </button>
            </div>
        </>
    );
};

export default Chatbot;
