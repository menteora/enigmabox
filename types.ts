import { LucideIcon } from 'lucide-react';

export interface EmotionItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface StepItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  shortDescription: string;
  imageColor: string; // Colore placeholder per l'immagine
  features: string[];
}