import React from 'react';

export default function Sec1() {
  const handleClick = () => {
    const target = document.getElementById('contact-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="mt-4 w-full bg-gray-50">
      <img
        src="/images/hero-truck.png"
        alt="Section 1 banner"
        className="w-full h-auto object-contain block cursor-pointer"
        style={{ maxWidth: '100vw' }}
        onClick={handleClick}
      />
    </section>
  );
}
