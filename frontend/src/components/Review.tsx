import { useEffect, useState } from 'react';

type ReviewItem = {
  id: number;
  photo: string;
  stars: number;
  car: string;
  text: string;
  carImage: string;
  price: string;
  updated_at: string;
};

export default function Review() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);

  useEffect(() => {
    fetch('${import.meta.env.VITE_API_BASE}testimonials/')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <section className="bg-white w-full px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <img src="/images/logo.png" alt="카리스카렌트 로고" className="h-16 w-auto" />
          <div>
            <p className="text-xl sm:text-2xl font-bold">고객과 함께 성장하는 카리스카렌트!</p>
            <p className="text-lg sm:text-xl mt-1">
              고객의 느낌, 감성, 만족과 쓴소리가 깃든 솔직 담백한 출고 후기!
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm overflow-hidden border flex flex-col h-[470px]"
            >
              <img
                src={`${r.photo}?v=${r.updated_at}`}
                alt="review"
                className="w-full h-auto object-cover"
              />
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
                    <img
                      src={`${r.carImage}?v=${r.updated_at}`}
                      alt="car"
                      className="h-10 w-auto object-contain"
                    />
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
