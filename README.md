# Aayush Kumar - Personal Portfolio

This is my personal portfolio website, built to showcase my **projects**, **skills**, and **professional experience**.  
It’s a modern, single-page application (SPA) developed using **React**, **Vite**, and **Tailwind CSS**.

A standout feature of this portfolio is an **interactive AI chatbot**, powered by the **Google Gemini API**, which allows visitors to engage in real-time conversations about my experience, projects, and technical expertise.

---

## Features

- **Modern SPA Design:** Sleek, responsive single-page layout for a smooth user experience.  
- **AI Chatbot:** Integrated chatbot using the **Google Gemini API** (`useChat.jsx`) to answer visitor questions dynamically.  
- **Responsive & Mobile-First:** Fully optimized for all devices, featuring a custom mobile navigation menu (`MobileMenu.jsx`).  
- **Smooth Animations:** Elegant fade-in effects on scroll using `AnimatedSection.jsx` (likely with **Framer Motion**).  
- **Clean Aesthetics:** Minimalist UI enhanced with a subtle animated grid background (`GridBackground.jsx`).  
- **Dynamic Content:** All portfolio details (projects, skills, experience) are centrally managed in `data.js` — update content easily without touching component logic.

---

## Key Sections

- **Home:** Dynamic introduction section.  
- **About:** Overview of my background and technical skills.  
- **Projects:** Filterable gallery showcasing key projects.  
- **Experience:** Timeline of professional and academic experience.  
- **Resume:** Direct link to download my resume (`Aayush_Kumar.pdf`).  
- **Contact:** Links to professional profiles and contact information.

---

## Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion (used in `AnimatedSection.jsx`) |
| **API** | Google Gemini API (for chatbot functionality) |

---

## 🗂️ Project Structure

```bash
src/
├── App.jsx                 # Main component managing routes and layout
├── main.jsx                # React entry point
├── data.js                 # Central data source for all portfolio content
├── components/
│   ├── Chatbot.jsx         # AI Chatbot interface
│   ├── Navbar.jsx          # Desktop navigation bar
│   ├── MobileMenu.jsx      # Mobile menu for smaller screens
│   ├── AnimatedSection.jsx # Scroll-triggered animations
│   ├── GridBackground.jsx  # Animated grid background
│   └── Icons.jsx           # SVG icon components
├── hooks/
│   └── useChat.jsx         # Custom hook handling Gemini API requests
└── pages/
    ├── HomePage.jsx
    ├── AboutPage.jsx
    ├── ProjectsPage.jsx
    ├── ExperiencePage.jsx
    ├── ResumePage.jsx
    └── ContactPage.jsx

 ## Setup and Installation

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
git clone https://github.com/aayushhks/portfolio.git
cd portfolio

### 2. Install Dependencies
npm install

### 3. Run the Development Server
npm run dev

> The app will start on http://localhost:5173 by default.

### 4. Build for Production
npm run build

This will generate an optimized production build in the dist/ directory.
