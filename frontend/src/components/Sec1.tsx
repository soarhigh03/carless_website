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
        src="/images/sec1_pic1.png"
        alt="Section 1 banner1"
        className="w-full h-auto object-contain block cursor-pointer"
        style={{ maxWidth: '100vw' }}
        onClick={handleClick}
      />

      <img
        src="/images/sec1_pic2.png"
        alt="Section 1 banner2"
        className="w-full h-auto object-contain block cursor-pointer"
        style={{ maxWidth: '100vw' }}
        onClick={handleClick}
      />

      <img
        src="/images/sec1_pic3.png"
        alt="Section 1 banner3"
        className="w-full h-auto object-contain block cursor-pointer"
        style={{ maxWidth: '100vw' }}
        onClick={handleClick}
      />
    </section>
    
  );
}
