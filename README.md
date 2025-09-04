# AltFlicks - AI-Powered Movie Recommendation Card

An AI-powered movie and TV show recommendation platform that uses Google's Gemini AI to provide personalized entertainment suggestions based on your mood, preferences, and available time.

## Features

- 🤖 **AI-Powered Recommendations**: Uses Google Gemini AI for intelligent movie/TV suggestions
- 🎭 **Mood-Based Matching**: Get recommendations that match your current mood
- ⏰ **Time-Aware**: Find content that fits your available viewing time
- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS
- ♿ **Accessible**: Full keyboard navigation and screen reader support
- 📱 **Mobile-First**: Optimized for all device sizes

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- A Google Gemini API key ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository
2. Run `npm install`
3. Copy `.env.example` to `.env` and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```
4. Run `npm run dev`
5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini AI
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── index.css           # Global styles
```
