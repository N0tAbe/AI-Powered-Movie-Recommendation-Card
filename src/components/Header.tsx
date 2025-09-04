import React from 'react';
import { FilmIcon } from 'lucide-react';
export const Header = () => {
  return <div className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3">
        <FilmIcon size={36} className="text-purple-400" />
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          AltFlicks
        </h1>
      </div>
      <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
        Your AI-powered movie and TV recommendation assistant that knows exactly
        what you should watch next.
      </p>
    </div>;
};