export interface Heading {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  intro: string;
  titles: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  start: string;
  logo: string;
  end?: string;
  score?: string;
  isPresent?: boolean;
  courses?: string[];
}

export interface EducationSection {
  id: string;
  list: EducationItem[];
}

export type TLinkType = "github" | "publication" | "other";

export interface ProjectCardStyle {
  imagePosition?: "top" | "bottom" | "left" | "right" | "center";
  imageFit?: "cover" | "contain";
}

export interface ProjectItem {
  name: string;
  description?: string;
  points?: string[];
  link?: string;
  image: string;
  linkType?: TLinkType;
  stack?: string[];
  style?: ProjectCardStyle;
}

export interface Projects {
  id: string;
  list: ProjectItem[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  logo: string;
  verificationLink?: string;
}

export interface Certifications {
  id: string;
  list: CertificationItem[];
}

export interface ContactSocials {
  github?: string;
  githubUsername?: string;
  linkedin?: string;
}

export interface Contact {
  id: string;
  email: string;
  socials: ContactSocials;
}

export interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  start: string;
  isPresent?: boolean;
  location: string;
  logo: string;
}

export interface Experience {
  id: string;
  list: ExperienceItem[];
}

export interface AchievementItem {
  title: string;
  date?: string;
  description?: string;
}

export interface AchievementsSection {
  id: string;
  list: AchievementItem[];
}

export interface ProfileData {
  heading: Heading;
  skills: Skills;
  projects: Projects;
  contact: Contact;
  experience: Experience;
  certifications: Certifications;
  education: EducationSection;
}

export type i18nKeys = Record<string, any>;

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface Skills {
  id: string;
  description?: string;
  list: SkillItem[][];
}

export type SkillsMap = Record<string, string>;
