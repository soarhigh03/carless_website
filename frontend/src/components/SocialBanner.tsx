import React from 'react';

export default function SocialBanner() {
  return (
    <section className="w-full bg-white py-6 px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-center gap-6">
      {/* Left: circle logo */}
      <img
        src="/images/logo.png"
        alt="Carless Logo"
        className="h-20 w-auto object-contain"
      />

      {/* Right: text + SNS icons */}
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-lg font-semibold mb-3">
          끝없이 쏟아지는 봄날의 햇살 같은 자동차 정보
        </p>

        {/* SNS icon row */}
        <div className="flex gap-4">
          <a href="https://blog.naver.com/jeps" target="_blank" rel="noopener noreferrer">
            <img src="/images/blog.png" alt="Naver Blog" className="h-8 w-auto" />
          </a>
          <a href="https://studio.youtube.com/channel/UC1tom5iu_9nZn4bCX5ruonA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D" target="_blank" rel="noopener noreferrer">
            <img src="/images/youtube.png" alt="YouTube" className="h-8 w-auto" />
          </a>
          <a href="https://www.instagram.com/clcr.co.kr/?hl=ko" target="_blank" rel="noopener noreferrer">
            <img src="/images/instagram.png" alt="Instagram" className="h-8 w-auto" />
          </a>
          <a href="https://www.facebook.com/happyhandling" target="_blank" rel="noopener noreferrer">
            <img src="/images/facebook.png" alt="Facebook" className="h-8 w-auto" />
          </a>
        </div>
      </div>
    </section>
  );
}
