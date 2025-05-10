import React from 'react';

const features = [
  {
    image: '/images/sec6_1.png',
    text: '무심사 무보증의 끝판왕\n화물차 리스 선착순 계약출고 중'
  },
  {
    image: '/images/sec6_2.png',
    text: '저신용자도 가능한\n장기렌트 프로모션 상담 접수 중'
  },
  {
    image: '/images/sec6_3.png',
    text: '이미 고금리 자동차 금융은 \n신한마이카 저금리 대환 대출로\n빨리 갈아타세요.'
  }
];

export default function Sec6() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={f.image}
              alt={`섹션 이미지 ${i + 1}`}
              className="w-full sm:w-1/2 object-contain"
            />
            <p className="text-xl font-semibold text-center sm:text-left whitespace-pre-line">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
