export type ActiveTab = 
  | 'home' 
  | 'about' 
  | 'design' 
  | 'menu' 
  | 'tech' 
  | 'business' 
  | 'report'
  | 'docs';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  nis: string; // Student ID
  avatar: string;
  contributions: string[];
  favoriteDrink: string;
  quote: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Brain Boosters' | 'Refreshers' | 'Smart Bakery';
  priceIdr: number;
  priceUsd: number;
  calories: number;
  focusRating: number; // 1-5
  sugarGrams: number;
  allergens: string[];
  description: string;
  studentBenefit: string;
  badge?: string;
}

export interface CafeZone {
  id: string;
  name: string;
  area: string;
  specs: string;
  purpose: string;
  iotFeature: string;
  energyUse: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface VocabWord {
  term: string;
  partOfSpeech: string;
  definitionEn: string;
  meaningId: string; // Indonesian meaning for Grade 9 students
  example: string;
}
