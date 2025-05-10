// src/components/Review.tsx

import React from 'react';

const reviews = [
  {
    image: '/images/review1.jpg',
    stars: 5,
    car: '현대디 올 뉴 그랜저 2025년형 가솔린 2.5 프리미엄',
    text: '정말 친절하게 자세히 설명해주시고 무엇보다 신뢰와 믿음이 정말 갑니다. 차량 설명 등 고객에 맞는 차량 선택 및 차량의 장/단점 꼼꼼히 체크해 주십니다. 저희 부모님 지...',
    carImage: '/images/reviewcar1.jpg',
    price: '256,350원~'
  },
  {
    image: '/images/review2.jpg',
    stars: 5,
    car: '기아봉고 3 2025년형 LPG 터보 2.5 1톤 2WD 표준캡 초장축 GLS',
    text: '차량 인도 시기를 딱 맞춰서 고마워요 또 봐요 ~~',
    carImage: '/images/reviewcar2.png',
    price: '0원~'
  },
  {
    image: '/images/review3.png',
    stars: 5,
    car: '현대포터2 2024년형 LPG 터보 2.5 2WD 슈퍼캡 초장축 프리미엄',
    text: '사위가 차량이 급하게 필요했는데 계약부터 인도까지 빠르게 해줘서 고마워요 또 소개할게요 ~~^',
    carImage: '/images/reviewcar3.jpg',
    price: '0원~'
  },
];

export default function Review() {
  return (
    <section className="bg-white w-full px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <img src="/images/logo.png" alt="카리스카렌트 로고" className="h-16 w-auto" />
          <div>
            <p className="text-xl sm:text-2xl font-bold">고객과 함께 성장하는 카리스카렌트!</p>
            <p className="text-lg sm:text-xl mt-1">고객의 느낌, 감성, 만족과 쓴소리가 깃든 솔직 담백한 출고 후기!</p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm overflow-hidden border flex flex-col h-[470px]"
            >
              <img src={r.image} alt="review" className="w-full h-auto object-cover" />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-yellow-500 mb-2">{'★★★★★'.slice(0, r.stars)}</div>
                  <h3 className="font-semibold text-base mb-1">{r.car}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 h-[4.5em] overflow-hidden">
                    {r.text}
                  </p>
                </div>
                <div>
                  <hr className="my-2" />
                  <div className="flex items-center gap-3 mt-2">
                    <img src={r.carImage} alt="car" className="h-10 w-auto object-contain" />
                    <div>
                      <p className="text-sm font-medium leading-tight">{r.car}</p>
                      <p className="text-xs text-gray-400 mt-1">{r.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}