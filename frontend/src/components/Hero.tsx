// src/components/Hero.tsx
import React from 'react';
import type { Section } from '../api/content';

export default function Hero({ title, subtitle, image }: Section) {
  return (
    <section className="w-full bg-gray-50">
      {/* 1. Full-bleed hero image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover block"
          style={{ maxWidth: '100vw' }}
        />
      </div>

      {/* 2. Below-the-image text */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-secondary">
          {title}
        </h1>
        {subtitle && <p className="mb-6 text-lg">{subtitle}</p>}
        <a
          href="#contact"
          className="bg-primary px-6 py-3 rounded-lg font-semibold shadow"
        >
          상담 신청하기
        </a>
      </div>
    </section>
  );
}
