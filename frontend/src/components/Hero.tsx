import React from 'react';

type SectionImage = {
  url: string;
  updated_at: string;
};

export interface Section {
  title: string;
  subtitle?: string;
  image: SectionImage | string; // ✅ 유연하게 처리 가능하도록 string도 허용
}

export default function Hero({ title, subtitle, image }: Section) {
  // ✅ image가 string이면 URL로 직접 사용, 객체면 url + updated_at
  let src = '';
  if (typeof image === 'string') {
    src = image;
  } else if (image?.url) {
    src = `${image.url}?v=${image.updated_at}`;
  }

  return (
    <section className="mt-4 w-full bg-gray-50">
      {src && (
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-contain block"
          style={{ maxWidth: '100vw' }}
        />
      )}

      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-secondary">
          {title}
        </h1>
        {subtitle && <p className="mb-6 text-lg">{subtitle}</p>}
        <a
          href="#contact"
          className="bg-primary px-6 py-3 rounded-lg font-semibold shadow"
        >
          상담 신청하기
        </a>
      </div>
    </section>
  );
}
