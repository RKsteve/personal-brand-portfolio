
export interface SectionHeaders {
  navbar: {
    cta: string; // "Let's Talk"
    navLinks: { name: string; id: string }[]; // Navigation items
  };
  about: {
    title: string;
    description: string; // The "Success in the digital landscape..." text
  };
  work: {
    title: string;
    viewProject: string; // "Inquire Details"
  };
  services: {
    title: string;
    cta: string; // "Inquire"
  };
}

export interface PortfolioData {
  // ... existing fields ...
  
  // ADD THIS
  headers: SectionHeaders;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  price?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface FAQ {
  
  question: string;
  answer: string;
}

// --- INTERFACES FOR CONTACT SECTION ---

export interface FormField {
  label: string;
  placeholder: string;
}

export interface ContactSection {
  title: string;
  description: string;
  email: {
    display: string; // What the user SEES (e.g., hello@alex.com)
    href: string;    // What the link DOES (e.g., mailto:hello@alex.com)
  };
  cta: {
    calendar: string;
  };
  form: {
    name: FormField;
    email: FormField;
    message: FormField;
    submitBtn: string;
  };
  success: {
    title: string;
    message: string;
    resetBtn: string;
  };
}

// --- INTERFACES FOR FOOTER & SOCIALS ---

export interface Socials {
  x: string;
  instagram: string;
  linkedin: string;
}

export interface FooterSection {
  tagline: string;
  socialLabel: string;
  legalLabel: string;
  copyrightSuffix: string;
}

export interface PortfolioData {
  headers: SectionHeaders;
  name: string;
  tagline: string;
  bio: string;
  primaryCTA: string;
  secondaryCTA: string;
  aboutHighlights: string[];
  skills: Skill[];
  services: Service[];
  projects: Project[];
  metrics: Metric[];
  faqTitle: string;
  faqs: FAQ[];
  contact: ContactSection; 
  socials: Socials;
  footer: FooterSection;
}
