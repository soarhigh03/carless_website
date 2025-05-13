// src/components/Footer.tsx

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-white text-sm text-gray-800 px-4 py-6 sm:px-8 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <div className="flex flex-col gap-3">
          {/* Logo + Links (inline) */}
          <div className="flex items-center gap-3 flex-wrap">
            <img src="/images/logo.png" alt="카리스카렌트 로고" className="h-10 w-auto" />
            <a href="/privacy" className="text-red-500 font-semibold whitespace-nowrap">개인정보처리방침</a>
            <span className="text-gray-300">|</span>
          
            <a href="/terms" className="text-gray-600 whitespace-nowrap">이용약관</a>
          </div>

          {/* Company info always below */}
          <div className="leading-relaxed text-[13px]">
            <p>카리스카렌트 1st Director 정해봉, 연락처 : 010-9155-5779</p>
            <p>경기도 양주시 천보산로 126-7, 2층 (회암동)</p>
            <p>사업자등록번호 : 297-23-00961 대표번호 : 1600-5486</p>
          </div>
        </div>

        {/* Right side: 고객센터 + badge */}
        <div className="flex flex-col items-end justify-between text-right gap-2">
          <div>
            <div className="font-semibold text-base">고객센터</div>
            <div className="text-lg font-bold">☎ 1600-5486</div>
          </div>
          <img src="/images/prize.png" alt="우수 렌탈 서비스" className="h-10 w-auto mt-2" />
        </div>
      </div>
    </footer>
  );
}
