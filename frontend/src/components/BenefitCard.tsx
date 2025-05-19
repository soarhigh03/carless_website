import React from 'react';
import type { Section } from '../api/content';

export default function BenefitCard({ title, body, image }: Section) {
  return (
    <div className="flex flex-col items-center text-center p-1 rounded-xl shadow-sm">
      {image && (
        <img
          src={`/images/${image}`}
          alt={title}
          className="w-full max-w-xs h-auto mb-4 object-contain"
        />
      )}
    </div>
  );
}
