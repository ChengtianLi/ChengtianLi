/// <reference types="vite/client" />
export enum SectionType {
  DESIGN = 'DESIGN',
  RESEARCH = 'RESEARCH',
  ABOUT = 'ABOUT'
}

export enum Language {
  EN = 'EN',
  JP = 'JP'
}

export interface NavItem {
  id: string;
  label: string;
  labelJP?: string;
}

export const RESEARCH_NAV: NavItem[] = [
  { id: 'publications', label: 'Publications', labelJP: '出版物' },
  { id: 'experience', label: 'Work Experience', labelJP: '職務経験' },
  { id: 'scholarships', label: 'Scholarships', labelJP: '奨学金' }
];
