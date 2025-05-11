import { api } from './base';

export interface Section {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  body?: string;
  image?: string;
}
export interface Testimonial {
  id: number;
  name: string;
  summary: string;
  photo: string;
  rating: number;
}

const MOCK = import.meta.env.VITE_MOCK === 'true';

export function getSections(): Promise<Section[]> {
  return MOCK
    ? fetch('/mock/sections.json').then(r => r.json())
    : api.get('sections/').then(r => r.data);
}

export function getTestimonials(): Promise<Testimonial[]> {
  return MOCK
    ? fetch('/mock/testimonials.json').then(r => r.json())
    : api.get('testimonials/').then(r => r.data.results);
}

export function submitMeetup(payload: unknown) {
  return MOCK
    ? Promise.resolve({ ok: true })
    : api.post('meetup/', payload).then(r => r.data);
}