Aayush Kumar - Personal Portfolio

This is my personal portfolio website, built to showcase my projects, skills, and professional experience. It's a modern, single-page application (SPA) created with React, Vite, and Tailwind CSS.

A key feature of this portfolio is an interactive AI chatbot, powered by the Google Gemini API. This allows visitors to ask questions about my skills, projects, and experience in a conversational way.

Features

Modern SPA Design: A sleek, responsive, single-page application experience.

AI Chatbot: An integrated chatbot using the Google Gemini API (useChat.jsx) to answer visitor questions.

Responsive & Mobile-First: Fully responsive design that looks great on all devices, complete with a dedicated mobile menu (MobileMenu.jsx).

Smooth Animations: Sections fade in gracefully on scroll, managed by the AnimatedSection.jsx component (likely using Framer Motion).

Clean Aesthetics: Features a subtle, animated grid background (GridBackground.jsx) for a modern, tech-focused feel.

Dynamic Content: All portfolio content (projects, experience, skills) is loaded from a central data.js file, making it easy to update without touching the component logic.

Key Sections:

Home: A dynamic introduction.

About: A brief about me and my technical skills.

Projects: A filterable gallery of my most relevant projects.

Experience: A timeline of my professional experience.

Resume: A direct link to download my PDF resume (Aayush_Kumar.pdf).

Contact: A section with links to my professional profiles.

Tech Stack

Frontend: React

Build Tool: Vite

Styling: Tailwind CSS

Animations: Framer Motion (implied by AnimatedSection.jsx)

API: Google Gemini API (for the AI chatbot)

Project Structure

Here is a simplified overview of the project's src directory:

src/
├── App.jsx           # Main component, handles page state and routing
├── main.jsx          # React entry point
├── data.js           # All portfolio content (projects, experience, skills)
├── components/
│   ├── Chatbot.jsx   # AI Chatbot UI
│   ├── Navbar.jsx    # Desktop navigation bar
│   ├── MobileMenu.jsx # Mobile navigation menu
│   ├── AnimatedSection.jsx # Wrapper for scroll animations
│   ├── GridBackground.jsx  # Animated grid background
│   └── Icons.jsx     # SVG icon components
├── hooks/
│   └── useChat.jsx   # Custom hook for Gemini API logic
└── pages/
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── ProjectsPage.jsx
    ├── ExperiencePage.jsx
    ├── ContactPage.jsx
    └── ResumePage.jsx


Setup and Installation

To run this project locally, follow these steps:

Clone the repository:

git clone [https://github.com/aayushhks/portfolio.git](https://github.com/aayushhks/portfolio.git)


Navigate to the project directory:

cd portfolio


Install dependencies:

npm install


Set up environment variables:
Create a .env file in the root of the project. You will need to add your Google Gemini API key for the chatbot to function.

VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE


Run the development server:

npm run dev


The application will be available at http://localhost:5173 (or another port if 5173 is in use).

Building for Production

To create a production-ready build, run:

npm run build


This will generate a dist folder with the optimized and minified static assets, which you can deploy to any static site hosting service.
