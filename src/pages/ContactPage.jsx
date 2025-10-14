import React from 'react';
import { portfolioDetails } from '../data.js';

const ContactPage = () => (
    <div className="relative z-10 flex flex-col items-start max-w-4xl w-full text-left p-4">
        <h2 className="text-3xl font-bold text-slate-200 mb-4 font-mono tracking-tight">04. Get In Touch</h2>
        <div className="w-full h-px bg-slate-700 mb-8"></div>
        <div className="max-w-xl">
            <p className="text-slate-400 text-lg mb-8">
                My inbox is always open. Whether you have a question, a potential opportunity, or just want to say hi, I’ll do my best to get back to you!
            </p>
            <a
                href={`mailto:${portfolioDetails.email}`}
                className="inline-block px-6 py-3 font-medium font-mono tracking-wider text-cyan-300 transition-colors duration-300 border border-cyan-300 rounded hover:bg-cyan-300/10"
            >
                Say Hello
            </a>
        </div>
    </div>
);

export default ContactPage;

