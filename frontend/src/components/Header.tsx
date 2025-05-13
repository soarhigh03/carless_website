// =============================================================
//  Header.tsx – 48 px header, logo & badge left, two-line text flush right
// =============================================================

import React from "react";

export default function Header() {
  const HEIGHT_PX = 52;
  const PIC_HEIGHT_PX = 44;

  return (
    <header
      className="sticky top-0 z-[999] bg-white shadow-sm w-full"
      style={{ height: HEIGHT_PX, minHeight: HEIGHT_PX, maxHeight: HEIGHT_PX, overflow: "hidden" }}
    >
      <div
        className="w-full flex items-center h-full px-4 sm:px-6"
        style={{ height: "100%" }}
      >
        {/* Left: logo + award badge */}
        <img src="/images/logo.png"  alt="logo"  className="block object-contain" style={{ height: PIC_HEIGHT_PX }} />
        <img src="/images/prize.png" alt="badge" className="block object-contain ml-2" style={{ height: PIC_HEIGHT_PX }} />
        <span className="ml-auto text-right text-xs sm:text-sm leading-tight text-black">
          자동차 금융 혁신 리더!<br/>
          견적 승부 실전 솔루션 제공!
        </span>

      </div>
    </header>
  );
}

// =============================================================