import React, { useState, memo } from 'react';
import { Header } from '../components/Header';
import { RecommendationForm } from '../components/RecommendationForm';
import { RecommendationDisplay } from '../components/RecommendationDisplay';
export const Home = () => {
  const [recommendation, setRecommendation] = useState(null);
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
  const handleFormSubmit = data => {
    setFormData(data);
    generateMockRecommendation(data);
  };
  const generateMockRecommendation = data => {
    setIsLoading(true);
    setTimeout(() => {
      const mockRecommendation = {
        title: data.genre === 'Sci-Fi' ? data.type === 'tv' ? 'Severance' : 'Arrival' : data.genre === 'Comedy' ? data.type === 'tv' ? 'What We Do in the Shadows' : 'Palm Springs' : data.genre === 'Drama' ? data.type === 'tv' ? 'Succession' : 'Sound of Metal' : data.type === 'tv' ? 'Dark' : 'Everything Everywhere All at Once',
        hook: data.genre === 'Sci-Fi' ? data.type === 'tv' ? "A corporate workplace that surgically divides employees' memories between work and personal life." : "A linguist's encounter with aliens becomes a profound journey through time and love." : data.genre === 'Comedy' ? data.type === 'tv' ? 'Vampire roommates struggle with the mundane challenges of modern life.' : 'Time loops have never been this fun—or existential.' : data.genre === 'Drama' ? data.type === 'tv' ? "A media dynasty's power struggle reveals the darkest sides of wealth and ambition." : "A drummer's identity crumbles as he loses his hearing." : data.type === 'tv' ? 'A missing child sets four families on a hunt for answers as they unearth a mind-bending mystery.' : "A laundromat owner discovers she's the key to saving the multiverse.",
        description: data.genre === 'Sci-Fi' ? data.type === 'tv' ? 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.' : 'When mysterious spacecraft touch down across the globe, an elite team is brought together to investigate. As mankind teeters on the verge of global war, linguist Louise Banks races against time to decipher their intent.' : data.genre === 'Comedy' ? data.type === 'tv' ? "A documentary-style look into the daily lives of four vampires who've been roommates for hundreds of years. They struggle with paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming their thirst for human blood." : 'Two strangers meet at a Palm Springs wedding only to get stuck in a time loop. As they experience the same day repeatedly, they find meaning and connection in an otherwise meaningless existence.' : data.genre === 'Drama' ? data.type === 'tv' ? 'The Roy family controls one of the biggest media and entertainment conglomerates in the world. The drama series tracks their lives as they contemplate what the future will hold for them once their aging father begins to step back from the company.' : "A heavy-metal drummer's life is thrown into freefall when he begins to lose his hearing, forcing him to confront his identity and what makes life worth living." : data.type === 'tv' ? 'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.' : 'An exhausted middle-aged woman finds herself suddenly able to access parallel universes, gaining abilities and connections she never imagined possible.',
        whyItFits: `This ${data.hiddenGemPreference === 'Hidden gem' ? 'underappreciated treasure' : 'acclaimed favorite'} perfectly matches your ${data.mood} mood and desire for a ${data.vibe} experience. ${data.type === 'tv' ? `With episodes around ${data.genre === 'Comedy' ? '30' : '50'} minutes each, you can watch at your own pace.` : `At ${data.genre === 'Comedy' ? '90' : data.genre === 'Sci-Fi' ? '116' : '120'} minutes, it fits within your ${data.duration} minute timeframe.`}`,
        platforms: data.platforms.includes('Netflix') ? 'Netflix' : data.platforms.includes('Hulu') ? 'Hulu' : data.platforms.includes('Amazon') ? 'Amazon Prime Video' : data.platforms.includes('Apple') ? 'Apple TV+' : 'Disney+',
        tagline: data.mood === 'Thoughtful' ? "The existential crisis you'll actually enjoy having." : data.mood === 'Happy' ? 'Your dopamine receptors just sent us a thank-you note.' : data.mood === 'Sad' ? 'Go ahead, embrace the beautiful melancholy.' : 'The mind-bending journey your brain has been waiting for.'
      };
      setRecommendation(mockRecommendation);
      setIsLoading(false);
    }, 1500);
  };
  const handleReset = () => {
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
  };
  const handleGetAnother = () => {
    generateMockRecommendation(formData);
  };
  return <>
      <Header />
      {!recommendation ? <RecommendationForm onSubmit={handleFormSubmit} /> : <RecommendationDisplay recommendation={recommendation} formData={formData} onReset={handleReset} onGetAnother={handleGetAnother} isLoading={isLoading} />}
    </>;
};