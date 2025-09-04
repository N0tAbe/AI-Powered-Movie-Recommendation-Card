import React from 'react';
export const About = () => {
  return <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        About Us
      </h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <p className="text-gray-300 mb-4">
          AltFlicks was born from a simple idea: finding the perfect movie or TV
          show shouldn't be harder than watching one. We're a team of film
          enthusiasts, data scientists, and developers who believe that
          entertainment recommendations should be personal, meaningful, and
          surprisingly accurate.
        </p>
        <p className="text-gray-300 mb-4">
          Our AI-powered platform goes beyond basic genre matching. We consider
          your mood, available time, and preferred viewing style to suggest
          content that truly resonates with what you want to watch right now.
        </p>
        <p className="text-gray-300">
          Whether you're looking for a hidden gem or the next big hit, AltFlicks
          is here to be your personal entertainment curator.
        </p>
      </div>
    </div>;
};