import { useState } from 'react';
import { portfolioDetails, resumeData } from '/src/data.js';

// This custom hook encapsulates all the logic for the chatbot.
export const useChat = () => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm Aayush's AI assistant. Feel free to ask me anything about his skills, experience, or projects." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Combines resume and project data into a single context string for the AI.
    const fullContext = `
        Resume: ${JSON.stringify(resumeData, null, 2)}
    `;

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const apiKey = ""; // API key is handled by the environment, leave as empty string.
        // PERMANENT FIX: Updated to the latest stable Gemini model endpoint for maximum reliability.
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

        // Construct the payload with history and system instructions
        const payload = {
            contents: [
                ...messages.map(msg => ({
                    role: msg.role === 'assistant' ? 'model' : 'user', // API uses 'model' role
                    parts: [{ text: msg.content }]
                })),
                {
                    role: 'user',
                    parts: [{ text: input }]
                }
            ],
            systemInstruction: {
                parts: [{ text: `${portfolioDetails.chatbotPrompt}\n\n${fullContext}` }]
            }
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error("API Error Response:", errorBody);
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            const botMessageContent = result.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Please try again.";

            const botMessage = { role: 'assistant', content: botMessageContent };
            setMessages(prev => [...prev, botMessage]);

        } catch (error) {
            console.error("Failed to fetch from Gemini API:", error);
            const errorMessage = { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        input,
        handleInputChange,
        handleSubmit,
        isLoading
    };
};

