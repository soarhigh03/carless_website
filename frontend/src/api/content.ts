import { api } from './base';
import axios from 'axios';

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

export function submitMeetup(payload: {
  name: string;
  phone: string;
  car_type?: string;
  content?: string;
}) {
  // ✅ car_type과 content를 하나의 message로 조합
  const message = `${payload.car_type ? `[차종] ${payload.car_type}\n` : ''}${payload.content ?? ''}`.trim();

  return api.post('inquiries/', {
    name: payload.name,
    phone: payload.phone,
    message: message
  }).then(r => r.data);
}
