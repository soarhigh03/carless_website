import React from 'react';
import type { Section } from '../api/content';

export default function BenefitCard({ title, body }: Section) {
  return (
    <div className="border p-6 rounded-xl text-center shadow-sm">
      <h3 className="text-xl font-bold mb-3 text-secondary">{title}</h3>
      <p className="text-sm leading-6">{body}</p>
    </div>
  );
}
