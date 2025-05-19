import React from 'react';

export default function BenefitSection() {
  const images = [
    'benefit_cheap.png',
    'benefit_easy.png',
    'benefit_fast.png',
  ];

  return (
    <section className="flex justify-center gap-6 p-6">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className="w-40 h-40 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
        />
      ))}
    </section>
  );
}
