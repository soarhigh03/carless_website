import React from 'react';
import type { Section } from '../api/content';

export default function BenefitCard({ title, body, image }: Section) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl border shadow-sm">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full max-w-xs h-auto mb-4 object-contain"
        />
      )}
      <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
      <p className="text-sm leading-6">{body}</p>
    </div>
  );
}
