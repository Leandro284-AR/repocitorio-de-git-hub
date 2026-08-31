export type SectionId = 
  | 'portada'
  | 'razas'
  | 'personajes'
  | 'transformaciones'
  | 'sagas'
  | 'episodios'
  | 'peliculas'
  | 'curso'
  | 'blog'
  | 'cv'
  | 'faq'
  | 'quienes-somos'
  | 'contacto';

export interface CourseStudyDetail {
  studyTitle: string; // H5
  content: string; // P
  keyPoints: string[];
  evaluationQuestion: string;
}

export interface CourseSubtopic {
  subtopicTitle: string; // H4
  estimatedMinutes: string;
  summary: string; // P with BR
  details: CourseStudyDetail[]; // H5
}

export interface CourseMainTopic {
  id: string;
  topicNumber: number;
  topicTitle: string; // H3
  description: string;
  duration: string;
  level: string;
  badge: string;
  subtopics: CourseSubtopic[]; // H4
}

export interface CourseInfo {
  title: string; // H1/H2
  subtitle: string;
  code: string;
  level: string;
  duration: string;
  modality: string;
  certificate: string;
  instructor: string;
  description: string;
  objectives: string[];
  prerequisites: string[];
  topics: CourseMainTopic[];
}

export interface Race {
  id: string;
  badge: string;
  badgeColor?: string;
  name: string;
  origin: string;
  desc: string;
  knownMembers: string[];
  distinctiveTraits: string[];
}

export interface Character {
  id: string;
  name: string;
  japaneseName?: string;
  race: string;
  role: 'hero' | 'villain' | 'neutral';
  desc: string;
  debut: string;
  debutEp: string;
  specialTechniques: string[];
  powerLevelEstimate?: string;
  avatarIcon: string;
  accentColor: string;
}

export interface Transformation {
  id: string;
  badge: string;
  badgeColor?: string;
  name: string;
  multiplier: string;
  isDivine?: boolean;
  debut: string;
  desc: string;
  users: string[];
  auraColor: string;
}

export interface Saga {
  id: string;
  title: string;
  episodes: string;
  years: string;
  villain: string;
  accentColor: string;
  desc: string;
  highlights: string[];
}

export interface Episode {
  number: number;
  title: string;
  saga: string;
  desc: string;
  isKeyEpisode?: boolean;
}

export interface Movie {
  number: number;
  title: string;
  year: number;
  villain: string;
  desc: string;
  duration?: string;
}

export interface BlogComment {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  reply?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  contentSections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    codeOrPreSnippet?: string;
    callout?: string;
  }[];
  tags: string[];
  comments: BlogComment[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  detail?: string;
}

export interface ProjectItem {
  name: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  linkText?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  period: string;
  location: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  companyOrContext: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface CVData {
  fullName: string;
  title: string;
  specialty: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  profileSummary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: { title: string; issuer: string; year: string }[];
  languages: { language: string; level: string }[];
  technicalScript: string;
}
