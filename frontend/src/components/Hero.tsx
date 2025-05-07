import React from 'react';
import type { Section } from '../api/content';

export default function Hero({ title, subtitle, image }: Section) {
  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 items-center">
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg order-2 md:order-1"
          />
        )}
        <div className="order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-secondary">
            {title}
          </h1>
          {subtitle && <p className="mb-6 text-lg">{subtitle}</p>}
          <a href="#contact" className="bg-primary px-5 py-3 rounded-lg font-semibold shadow-md">
            상담 신청하기
          </a>
        </div>
      </div>
    </section>
  );
}