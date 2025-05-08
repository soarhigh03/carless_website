import React from 'react';

export default function CTA() {
  return (
    <section className="bg-primary text-center py-10 px-4">
      <h2 className="text-xl sm:text-2xl font-extrabold mb-4 text-secondary">
        중고차를 처분하고 새 차를 사고 싶나요?
      </h2>
      <a
        href="#contact"
        className="inline-block bg-secondary text-white font-semibold px-8 py-3 rounded-lg shadow-md"
      >
        1분 상담 신청
      </a>
    </section>
  );
}
