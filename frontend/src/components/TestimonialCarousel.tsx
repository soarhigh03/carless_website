import React from 'react';
import type { Testimonial } from '../api/content';

interface Props { items: Testimonial[] }
export default function TestimonialCarousel({ items }: Props) {
  if (!items.length) return null;
  return (
    <section className="bg-white py-12" id="reviews">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">출고 후기</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(t => (
            <article key={t.id} className="p-5 border rounded-lg shadow-sm">
              <img src={t.photo} alt={t.name} className="w-full h-40 object-cover mb-4 rounded" />
              <p className="font-semibold mb-2">{t.name}</p>
              <p className="text-sm line-clamp-3">{t.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}