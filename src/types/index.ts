// Site Configuration Types
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}

// Navigation Types
export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
  icon?: string;
  label?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Service Types
export interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  content?: any[];
  image?: SanityImage;
}

// Team Member Types
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  image: SanityImage;
  email?: string;
  phone?: string;
  linkedin?: string;
}

// Testimonial Types
export interface Testimonial {
  _id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  image?: SanityImage;
  rating: number;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Sanity Image Type
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
}

// Page Types
export interface PageSeo {
  title: string;
  description: string;
  ogImage?: SanityImage;
}

// Blog Types
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any[];
  author: TeamMember;
  publishedAt: string;
  image: SanityImage;
  categories: string[];
}

// Client Logo Types
export interface ClientLogo {
  _id: string;
  name: string;
  logo: SanityImage;
  url?: string;
}
