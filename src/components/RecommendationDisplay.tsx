import React from 'react';
import { ThumbsUpIcon, RefreshCwIcon, Loader2Icon, FilmIcon, MonitorIcon } from 'lucide-react';
import { RecommendationDisplayProps } from '../types';

export const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({
  recommendation,
  formData,
  onReset,
  onGetAnother,
  isLoading
}) => {
  if (!recommendation) return null;
  return <div className="max-w-4xl mx-auto">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-purple-500 p-2 rounded-full">
                <ThumbsUpIcon size={20} />
              </div>
              <span className="ml-2 text-sm bg-gradient-to-r from-purple-400 to-pink-500 px-3 py-1 rounded-full">
                AltFlicks Pick
              </span>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={onGetAnother} disabled={isLoading} className="text-gray-400 hover:text-white flex items-center gap-1 disabled:opacity-50">
                {isLoading ? <>
                    <Loader2Icon className="animate-spin" size={16} />
                    <span>Finding another...</span>
                  </> : <>
                    <RefreshCwIcon size={16} />
                    <span>Get Another</span>
                  </>}
              </button>
              <button onClick={onReset} className="text-gray-400 hover:text-white flex items-center gap-1">
                <span>New Search</span>
              </button>
            </div>
          </div>
          
          {/* Poster and Title Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Poster */}
            {recommendation.posterUrl && (
              <div className="flex-shrink-0">
                <img 
                  src={recommendation.posterUrl} 
                  alt={`${recommendation.title} poster`}
                  className="w-48 h-72 object-cover rounded-lg shadow-lg mx-auto md:mx-0"
                  onError={(e) => {
                    // Hide image if it fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            {/* Title and Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{recommendation.title}</h2>
              <div className="flex items-center gap-4 mb-3">
                {formData.type === 'movie' ? <div className="flex items-center gap-1 text-sm text-gray-300">
                    <FilmIcon size={14} />
                    <span>Movie</span>
                  </div> : <div className="flex items-center gap-1 text-sm text-gray-300">
                    <MonitorIcon size={14} />
                    <span>TV Series</span>
                  </div>}
                {recommendation.duration && (
                  <div className="text-sm text-purple-300 font-medium">
                    {recommendation.duration}
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="text-purple-300 italic mb-4">"{recommendation.hook}"</p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-300">{recommendation.description}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">
              Why It's Perfect For You
            </h3>
            <p className="text-gray-300">{recommendation.whyItFits}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Where to Watch</h3>
              <div className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm">
                {recommendation.platforms}
              </div>
            </div>
            <div className="sm:text-right">
              <h3 className="text-lg font-semibold mb-1">Your Criteria</h3>
              <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {formData.mood}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {formData.genre}
                </span>
                <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {formData.vibe}
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center">
            <p className="text-lg font-medium text-purple-300">
              {recommendation.tagline}
            </p>
          </div>
        </div>
      </div>
    </div>;
};