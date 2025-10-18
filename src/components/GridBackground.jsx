import React from 'react';

// A subtle, AI-themed grid background using SVG for performance.
const GridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w.org/2000/svg">
            <defs>
                {/* Defines a reusable pattern for the grid dots */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="rgba(255, 255, 255, 0.1)"></circle>
                </pattern>
            </defs>
            {/* Fills the entire background with the defined grid pattern */}
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
);

export default GridBackground;

