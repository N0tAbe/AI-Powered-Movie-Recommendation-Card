import React, { useState } from 'react';
import { SearchIcon, Loader2Icon, MonitorIcon, FilmIcon } from 'lucide-react';
export const RecommendationForm = ({
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    mood: '',
    genre: '',
    duration: '',
    vibe: '',
    platforms: '',
    hiddenGemPreference: '',
    type: 'movie' // Default to movie
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleTypeSelect = type => {
    setFormData(prev => ({
      ...prev,
      type
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setIsLoading(false);
    }, 1500);
  };
  const isFormValid = Object.values(formData).every(value => value.trim() !== '');
  return <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold mb-6 text-center">
        What are you in the mood for today?
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-6">
          <div className="flex rounded-lg overflow-hidden border border-gray-600">
            <button type="button" onClick={() => handleTypeSelect('movie')} className={`flex items-center gap-2 px-4 py-2 transition-colors ${formData.type === 'movie' ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
              <FilmIcon size={18} />
              <span>Movie</span>
            </button>
            <button type="button" onClick={() => handleTypeSelect('tv')} className={`flex items-center gap-2 px-4 py-2 transition-colors ${formData.type === 'tv' ? 'bg-purple-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}>
              <MonitorIcon size={18} />
              <span>TV Show</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Current Mood
            </label>
            <select name="mood" value={formData.mood} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
              <option value="">Select your mood</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Thoughtful">Thoughtful</option>
              <option value="Excited">Excited</option>
              <option value="Relaxed">Relaxed</option>
              <option value="Tense">Tense</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Preferred Genre
            </label>
            <select name="genre" value={formData.genre} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
              <option value="">Select a genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Documentary">Documentary</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Time Available (minutes)
            </label>
            <select name="duration" value={formData.duration} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
              <option value="">Select time available</option>
              <option value="30">30 minutes</option>
              <option value="60">60 minutes</option>
              <option value="90">90 minutes</option>
              <option value="120">120 minutes</option>
              <option value="150+">150+ minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Preferred Vibe/Style
            </label>
            <select name="vibe" value={formData.vibe} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
              <option value="">Select preferred vibe</option>
              <option value="Lighthearted">Lighthearted</option>
              <option value="Dark">Dark</option>
              <option value="Nostalgic">Nostalgic</option>
              <option value="Thought-provoking">Thought-provoking</option>
              <option value="Intense">Intense</option>
              <option value="Quirky">Quirky</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Streaming Platforms
            </label>
            <select name="platforms" value={formData.platforms} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
              <option value="">Select your platforms</option>
              <option value="Netflix">Netflix</option>
              <option value="Hulu">Hulu</option>
              <option value="Amazon">Amazon Prime</option>
              <option value="Disney+">Disney+</option>
              <option value="HBO Max">HBO Max</option>
              <option value="Apple TV+">Apple TV+</option>
              <option value="Multiple">Multiple platforms</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Hidden Gem or Mainstream?
            </label>
            <select name="hiddenGemPreference" value={formData.hiddenGemPreference} onChange={handleChange} className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent" required>
              <option value="">Select preference</option>
              <option value="Hidden gem">Hidden gem</option>
              <option value="Mainstream">Mainstream hit</option>
              <option value="Either">Either is fine</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" disabled={!isFormValid || isLoading} className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${isFormValid && !isLoading ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' : 'bg-gray-600 text-gray-300 cursor-not-allowed'}`}>
            {isLoading ? <>
                <Loader2Icon className="animate-spin" size={20} />
                Finding your perfect match...
              </> : <>
                <SearchIcon size={20} />
                Get Recommendation
              </>}
          </button>
        </div>
      </form>
    </div>;
};