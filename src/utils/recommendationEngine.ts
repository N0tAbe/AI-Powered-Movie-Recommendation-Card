import { FormData, Recommendation } from '../types';

export const generateRecommendation = (data: FormData): Recommendation => {
  const { genre, type, mood, vibe, hiddenGemPreference, duration, platforms } = data;

  // Movie/TV Show database based on genre and type
  const recommendations = {
    'Sci-Fi': {
      movie: {
        title: 'Arrival',
        hook: "A linguist's encounter with aliens becomes a profound journey through time and love.",
        description: 'When mysterious spacecraft touch down across the globe, an elite team is brought together to investigate. As mankind teeters on the verge of global war, linguist Louise Banks races against time to decipher their intent.',
        duration: 116
      },
      tv: {
        title: 'Severance',
        hook: "A corporate workplace that surgically divides employees' memories between work and personal life.",
        description: 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.',
        duration: 50
      }
    },
    'Comedy': {
      movie: {
        title: 'Palm Springs',
        hook: 'Time loops have never been this fun—or existential.',
        description: 'Two strangers meet at a Palm Springs wedding only to get stuck in a time loop. As they experience the same day repeatedly, they find meaning and connection in an otherwise meaningless existence.',
        duration: 90
      },
      tv: {
        title: 'What We Do in the Shadows',
        hook: 'Vampire roommates struggle with the mundane challenges of modern life.',
        description: "A documentary-style look into the daily lives of four vampires who've been roommates for hundreds of years. They struggle with paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming their thirst for human blood.",
        duration: 30
      }
    },
    'Drama': {
      movie: {
        title: 'Sound of Metal',
        hook: "A drummer's identity crumbles as he loses his hearing.",
        description: "A heavy-metal drummer's life is thrown into freefall when he begins to lose his hearing, forcing him to confront his identity and what makes life worth living.",
        duration: 120
      },
      tv: {
        title: 'Succession',
        hook: "A media dynasty's power struggle reveals the darkest sides of wealth and ambition.",
        description: 'The Roy family controls one of the biggest media and entertainment conglomerates in the world. The drama series tracks their lives as they contemplate what the future will hold for them once their aging father begins to step back from the company.',
        duration: 50
      }
    }
  };

  // Default recommendations
  const defaultRecommendations = {
    movie: {
      title: 'Everything Everywhere All at Once',
      hook: "A laundromat owner discovers she's the key to saving the multiverse.",
      description: 'An exhausted middle-aged woman finds herself suddenly able to access parallel universes, gaining abilities and connections she never imagined possible.',
      duration: 120
    },
    tv: {
      title: 'Dark',
      hook: 'A missing child sets four families on a hunt for answers as they unearth a mind-bending mystery.',
      description: 'When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships that exist among four families as they search for the kids.',
      duration: 50
    }
  };

  const selectedRecommendation = recommendations[genre as keyof typeof recommendations]?.[type] || defaultRecommendations[type];

  // Generate platform recommendation
  const getPlatform = (platforms: string): string => {
    if (platforms.includes('Netflix')) return 'Netflix';
    if (platforms.includes('Hulu')) return 'Hulu';
    if (platforms.includes('Amazon')) return 'Amazon Prime Video';
    if (platforms.includes('Apple')) return 'Apple TV+';
    return 'Disney+';
  };

  // Generate tagline based on mood
  const getTagline = (mood: string): string => {
    const taglines = {
      'Thoughtful': "The existential crisis you'll actually enjoy having.",
      'Happy': 'Your dopamine receptors just sent us a thank-you note.',
      'Sad': 'Go ahead, embrace the beautiful melancholy.',
      'Excited': 'The adrenaline rush your heart has been craving.',
      'Relaxed': 'The perfect escape from reality you needed.',
      'Tense': 'The mind-bending journey your brain has been waiting for.'
    };
    return taglines[mood as keyof typeof taglines] || 'The perfect match for your current vibe.';
  };

  // Generate why it fits explanation
  const generateWhyItFits = (data: FormData, selectedRec: any): string => {
    const { hiddenGemPreference, mood, vibe, type, genre, duration } = data;
    const durationText = type === 'tv' 
      ? `With episodes around ${selectedRec.duration} minutes each, you can watch at your own pace.`
      : `At ${selectedRec.duration} minutes, it fits within your ${duration} minute timeframe.`;
    
    return `This ${hiddenGemPreference === 'Hidden gem' ? 'underappreciated treasure' : 'acclaimed favorite'} perfectly matches your ${mood} mood and desire for a ${vibe} experience. ${durationText}`;
  };

  return {
    title: selectedRecommendation.title,
    hook: selectedRecommendation.hook,
    description: selectedRecommendation.description,
    whyItFits: generateWhyItFits(data, selectedRecommendation),
    platforms: getPlatform(platforms),
    tagline: getTagline(mood)
  };
};
