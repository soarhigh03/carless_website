import React, { useEffect, useState } from 'react'


interface BenefitData {
  id: number
  image_url: string
  text: string
  updated_at: string
}

export default function Sec6() {
  const [features, setFeatures] = useState<BenefitData[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}benefits/`)
      .then(res => res.json())
      .then(data => setFeatures(data))
      .catch(err => console.error('Failed to fetch benefits', err))
  }, [])

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {features.map((f, i) => (
          <div key={f.id} className="flex flex-col sm:flex-row items-center gap-6">
            <img
              src={`${f.image_url}?v=${new Date(f.updated_at).getTime()}`}
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
  )
}
