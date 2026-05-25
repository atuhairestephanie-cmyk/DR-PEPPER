export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'classic' | 'diet-zero' | 'drops';
  description: string;
  calories: number;
  sugar: string;
  canColor: string; // Tailwind class or hex color for CSS styling
  accentColor: string;
  textColor: string;
  flavorsHighlighted: string[];
  bannerText: string;
  nutrition: {
    sodium: string;
    carbs: string;
    protein: string;
  };
}

export interface FlavorComponent {
  id: number;
  name: string;
  intensity: 'High' | 'Medium' | 'Subtle';
  note: string;
  emoji: string;
  color: string;
}

export interface Coupon {
  code: string;
  discount: number; // multiplier e.g. 0.23 for 23% off
  description: string;
}

export interface ShopItem {
  id: string;
  name: string;
  category: 'apparel' | 'vintage' | 'novelty' | 'seasonal';
  price: number;
  image: string; // SVG mock or high-fidelity css construction
  rating: number;
  description: string;
  isNew?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  iconType: 'history' | 'rocket' | 'crown' | 'globe';
}

export interface TuitionApplicant {
  name: string;
  story: string;
  gpa: string;
  sport: string;
  approvedGrant: number;
}
