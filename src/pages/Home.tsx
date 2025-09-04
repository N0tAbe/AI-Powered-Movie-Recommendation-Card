import React, { useState, memo, useCallback } from 'react';
import { Header } from '../components/Header';
import { RecommendationForm } from '../components/RecommendationForm';
import { RecommendationDisplay } from '../components/RecommendationDisplay';
import { FormData, Recommendation } from '../types';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { searchMovie, searchTVShow, getMovieDetails, getTVShowDetails, getPosterUrl, getFallbackPoster, formatMovieDuration, formatTVShowDuration } from '../utils/moviePoster';

export const Home: React.FC = () => {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [formData, setFormData] = useState<FormData>({
    mood: '',
    genre: '',
    duration: '',
    vibe: '',
    platforms: '',
    hiddenGemPreference: '',
    type: 'movie' // Default to movie
  });
  const [isLoading, setIsLoading] = useState(false);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleFormSubmit = useCallback(async (data: FormData) => {
    setFormData(data);
    await generateRecommendation(data);
  }, []);

  const generateRecommendation = useCallback(async (data: FormData, isAnotherRequest = false) => {
    setIsLoading(true);
    try {
      const varietyInstruction = isAnotherRequest 
        ? `IMPORTANT: This is a request for a DIFFERENT recommendation. Suggest a completely different ${data.type === 'tv' ? 'TV show' : 'movie'} that still matches the criteria but is NOT the same as what was previously recommended. Think of alternative options, different subgenres, or lesser-known titles that would also fit perfectly. Consider different time periods, countries, or unique approaches to the ${data.genre} genre.`
        : "";

      const prompt = `
You are a movie and TV recommendation assistant. 
${varietyInstruction}
Suggest one ${data.type === 'tv' ? 'TV show' : 'movie'} that matches the following criteria:

- Mood: ${data.mood}
- Genre: ${data.genre}
- Duration available: ${data.duration} minutes
- Vibe/Style: ${data.vibe}
- Streaming platforms: ${data.platforms}
- Preference: ${data.hiddenGemPreference} (Hidden gem or mainstream)

IMPORTANT: You must respond with ONLY valid JSON. Do not include any text before or after the JSON. The JSON must have exactly these keys:

{
  "title": "Movie/Show Title",
  "hook": "One sentence hook that grabs attention",
  "description": "Brief plot description (2-3 sentences)",
  "whyItFits": "Explanation of why this matches their criteria",
  "platforms": "Where to watch it",
  "tagline": "Fun, catchy tagline"
}

Respond with ONLY the JSON object:`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      // Clean the response text to extract JSON
      let cleanedText = text.trim();
      
      // Remove any markdown code blocks if present
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
      
      // Try to find JSON object in the response
      const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        cleanedText = jsonMatch[0];
      }

      // Parse Gemini's JSON response safely
      let parsed: Recommendation;
      try {
        parsed = JSON.parse(cleanedText);
        
        // Validate that all required fields are present
        if (!parsed.title || !parsed.hook || !parsed.description || !parsed.whyItFits || !parsed.platforms || !parsed.tagline) {
          throw new Error('Missing required fields');
        }
      } catch (err) {
        console.error('JSON parsing error:', err);
        console.error('Raw response:', text);
        console.error('Cleaned text:', cleanedText);
        
        parsed = { 
          title: "Unknown", 
          hook: "AI had trouble formatting the response.",
          description: `Raw AI response: ${text.substring(0, 200)}...`, 
          whyItFits: "AI had trouble formatting JSON.", 
          platforms: data.platforms, 
          tagline: "AI hiccup 🤖" 
        };
      }

      // Fetch poster and duration for the recommendation
      const { posterUrl, duration } = await fetchPosterAndDuration(parsed.title, data.type);
      parsed.posterUrl = posterUrl;
      parsed.duration = duration;
      
      setRecommendation(parsed);
    } catch (error) {
      console.error("Error generating recommendation:", error);
      setRecommendation({
        title: "Oops!",
        hook: "Something went wrong generating your recommendation.",
        description: "We encountered an error while trying to get your personalized recommendation.",
        whyItFits: "Try again in a moment.",
        platforms: "",
        tagline: "AI hiccup 🤖"
      });
    } finally {
      setIsLoading(false);
    }
  }, [model]);

  const fetchPosterAndDuration = async (title: string, type: 'movie' | 'tv'): Promise<{posterUrl: string, duration: string}> => {
    try {
      let searchResult;
      if (type === 'movie') {
        searchResult = await searchMovie(title);
      } else {
        searchResult = await searchTVShow(title);
      }

      if (searchResult) {
        const posterUrl = searchResult.poster_path ? getPosterUrl(searchResult.poster_path) : getFallbackPoster(title, type);
        
        // Get detailed information for duration
        let duration = 'Duration unknown';
        if (type === 'movie' && searchResult.id) {
          const movieDetails = await getMovieDetails(searchResult.id);
          if (movieDetails && movieDetails.runtime) {
            duration = formatMovieDuration(movieDetails.runtime);
          }
        } else if (type === 'tv' && searchResult.id) {
          const tvDetails = await getTVShowDetails(searchResult.id);
          if (tvDetails && tvDetails.number_of_seasons) {
            duration = formatTVShowDuration(tvDetails.number_of_seasons, tvDetails.number_of_episodes);
          }
        }
        
        return { posterUrl, duration };
      }
    } catch (error) {
      console.error('Error fetching poster and duration:', error);
    }
    
    // Return fallback if no data found
    return {
      posterUrl: getFallbackPoster(title, type),
      duration: 'Duration unknown'
    };
  };
  const handleReset = useCallback(() => {
    setRecommendation(null);
    setFormData({
      mood: '',
      genre: '',
      duration: '',
      vibe: '',
      platforms: '',
      hiddenGemPreference: '',
      type: 'movie'
    });
  }, []);

  const handleGetAnother = useCallback(async () => {
    await generateRecommendation(formData, true);
  }, [formData, generateRecommendation]);
  return <>
      <Header />
      {!recommendation ? <RecommendationForm onSubmit={handleFormSubmit} /> : <RecommendationDisplay recommendation={recommendation} formData={formData} onReset={handleReset} onGetAnother={handleGetAnother} isLoading={isLoading} />}
    </>;
};