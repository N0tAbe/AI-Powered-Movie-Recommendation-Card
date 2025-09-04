import React from 'react';
import { BrainIcon, ClockIcon, ThumbsUpIcon, UsersIcon } from 'lucide-react';
export const WhatIs = () => {
  const features = [{
    icon: <BrainIcon className="h-6 w-6 text-purple-400" />,
    title: 'AI-Powered Recommendations',
    description: 'Our advanced AI understands your preferences and suggests content that matches your unique taste.'
  }, {
    icon: <ClockIcon className="h-6 w-6 text-purple-400" />,
    title: 'Time-Aware Suggestions',
    description: "Got 30 minutes or 3 hours? We'll find something perfect for your available time."
  }, {
    icon: <ThumbsUpIcon className="h-6 w-6 text-purple-400" />,
    title: 'Mood-Based Matching',
    description: "Tell us how you're feeling, and we'll recommend entertainment that fits your current mood."
  }];
  return <div className="max-w-4xl mx-auto space-y-12">
      {/* What is AltFlicks Section */}
      <section>
        <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          What is AltFlicks?
        </h1>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 mb-8">
          <p className="text-gray-300 mb-6">
            AltFlicks is your personal entertainment curator, using advanced AI
            to match you with movies and TV shows that perfectly align with your
            current mood, available time, and viewing preferences.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => <div key={index} className="p-4 rounded-lg bg-gray-700/50">
                <div className="mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Our Story
        </h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Our Mission
              </h3>
              <p className="text-gray-300">
                AltFlicks was born from a simple idea: finding the perfect movie
                or TV show shouldn't be harder than watching one. We're a team
                of film enthusiasts, data scientists, and developers who believe
                that entertainment recommendations should be personal,
                meaningful, and surprisingly accurate.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                The AltFlicks Difference
              </h3>
              <p className="text-gray-300">
                Our AI-powered platform goes beyond basic genre matching. We
                consider your mood, available time, and preferred viewing style
                to suggest content that truly resonates with what you want to
                watch right now.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Our Promise
              </h3>
              <p className="text-gray-300">
                Whether you're looking for a hidden gem or the next big hit,
                AltFlicks is here to be your personal entertainment curator.
                We're committed to helping you discover content that speaks to
                you, saves you time, and enhances your viewing experience.
              </p>
            </div>
            <div className="flex items-center justify-center pt-6">
              <div className="flex items-center gap-2 text-purple-400">
                <UsersIcon className="h-5 w-5" />
                <span className="font-medium">
                  Join thousands of happy viewers today
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};