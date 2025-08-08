// src/components/FloatingPanel.tsx

import React from 'react';

export default function FloatingPanel() {
  const scrollToContact = () => {
    const el = document.getElementById('contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-4">
      {/* 전화 버튼 */}
      <a
        href="tel:1600-5486"
        className="bg-red-500 text-white font-bold px-4 py-3 rounded-lg shadow-lg w-30 text-center hover:bg-red-600"
      >
        <div className="text-2xl mb-1">📞</div>
        <div className="leading-tight text-sm">
          상담신청<br />1600-5486
        </div>
      </a>

      {/* 상담 폼 스크롤 버튼 */}
      <button
        onClick={scrollToContact}
        className="bg-blue-500 text-white font-bold px-4 py-3 rounded-lg shadow-lg w-30 text-center hover:bg-blue-600"
      >
        <div className="text-2xl mb-1">💬</div>
        <div className="leading-tight text-sm">
          간편하고 빠른<br />실시간 상담
        </div>
      </button>
    </div>
  );
}
