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
