import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImage } from '@/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

// GROQ Queries
export const queries = {
  // Get all services
  services: `*[_type == "service"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    image
  }`,

  // Get single service by slug
  serviceBySlug: `*[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    icon,
    content,
    image
  }`,

  // Get team members
  teamMembers: `*[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    image,
    email,
    phone,
    linkedin
  }`,

  // Get testimonials
  testimonials: `*[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    company,
    role,
    content,
    image,
    rating
  }`,

  // Get client logos
  clientLogos: `*[_type == "clientLogo"] | order(order asc) {
    _id,
    name,
    logo,
    url
  }`,

  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    title,
    description,
    logo,
    contactEmail,
    contactPhone,
    address,
    socialLinks
  }`,
};

// Fetch functions
export async function getServices() {
  return client.fetch(queries.services);
}

export async function getServiceBySlug(slug: string) {
  return client.fetch(queries.serviceBySlug, { slug });
}

export async function getTeamMembers() {
  return client.fetch(queries.teamMembers);
}

export async function getTestimonials() {
  return client.fetch(queries.testimonials);
}

export async function getClientLogos() {
  return client.fetch(queries.clientLogos);
}

export async function getSiteSettings() {
  return client.fetch(queries.siteSettings);
}
