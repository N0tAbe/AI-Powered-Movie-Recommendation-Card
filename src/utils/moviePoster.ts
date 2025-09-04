import axios from 'axios';

// TMDB API configuration
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'ef04927ae11a3e6382f77b32959edcf4';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export interface MovieSearchResult {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  overview: string;
  runtime?: number;
}

export interface TVSearchResult {
  id: number;
  name: string;
  poster_path: string | null;
  first_air_date: string;
  overview: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
}

export const searchMovie = async (title: string): Promise<MovieSearchResult | null> => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: title,
        language: 'en-US',
        page: 1
      }
    });

    const results = response.data.results;
    if (results && results.length > 0) {
      return results[0]; // Return the first (most relevant) result
    }
    return null;
  } catch (error) {
    console.error('Error searching for movie:', error);
    return null;
  }
};

export const searchTVShow = async (title: string): Promise<TVSearchResult | null> => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/tv`, {
      params: {
        api_key: TMDB_API_KEY,
        query: title,
        language: 'en-US',
        page: 1
      }
    });

    const results = response.data.results;
    if (results && results.length > 0) {
      return results[0]; // Return the first (most relevant) result
    }
    return null;
  } catch (error) {
    console.error('Error searching for TV show:', error);
    return null;
  }
};

// Get detailed movie information including runtime
export const getMovieDetails = async (movieId: number): Promise<MovieSearchResult | null> => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

// Get detailed TV show information including seasons
export const getTVShowDetails = async (tvId: number): Promise<TVSearchResult | null> => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/tv/${tvId}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching TV show details:', error);
    return null;
  }
};

export const getPosterUrl = (posterPath: string | null): string => {
  if (!posterPath) {
    return getFallbackPoster('No Poster', 'movie');
  }
  return `${TMDB_IMAGE_BASE_URL}${posterPath}`;
};

// Fallback function that creates a placeholder poster
export const getFallbackPoster = (title: string, type: 'movie' | 'tv'): string => {
  // Create a simple placeholder with the title
  const encodedTitle = encodeURIComponent(title);
  const bgColor = '1f2937'; // Dark gray
  const textColor = 'ffffff'; // White
  return `https://via.placeholder.com/500x750/${bgColor}/${textColor}?text=${encodedTitle}`;
};

// Format movie runtime from minutes to hours and minutes
export const formatMovieDuration = (runtime: number): string => {
  if (!runtime) return 'Duration unknown';
  
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  
  if (hours === 0) {
    return `${minutes}min`;
  } else if (minutes === 0) {
    return `${hours}hr`;
  } else {
    return `${hours}hr ${minutes}min`;
  }
};

// Format TV show duration
export const formatTVShowDuration = (seasons: number, episodes?: number): string => {
  if (!seasons) return 'Duration unknown';
  
  if (seasons === 1) {
    return episodes ? `${seasons} Season (${episodes} episodes)` : `${seasons} Season`;
  } else {
    return episodes ? `${seasons} Seasons (${episodes} episodes)` : `${seasons} Seasons`;
  }
};
