export interface FormData {
  mood: string;
  genre: string;
  duration: string;
  vibe: string;
  platforms: string;
  hiddenGemPreference: string;
  type: 'movie' | 'tv';
}

export interface Recommendation {
  title: string;
  hook: string;
  description: string;
  whyItFits: string;
  platforms: string;
  tagline: string;
  posterUrl?: string;
  duration?: string;
}

export interface RecommendationFormProps {
  onSubmit: (data: FormData) => void;
}

export interface RecommendationDisplayProps {
  recommendation: Recommendation;
  formData: FormData;
  onReset: () => void;
  onGetAnother: () => void;
  isLoading: boolean;
}

export interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

export interface NavigationProps {
  isLoggedIn: boolean;
}

export interface LayoutProps {
  isLoggedIn: boolean;
}

export interface ProfileData {
  name: string;
  email: string;
  preferences: {
    favoriteGenres: string[];
    preferredPlatforms: string[];
    contentRating: string;
    languagePreference: string;
  };
}

export interface WatchHistoryItem {
  title: string;
  date: string;
  rating: number;
  genre: string;
}

export interface BillingHistoryItem {
  date: string;
  amount: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}
