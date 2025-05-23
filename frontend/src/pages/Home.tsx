import React, { useEffect, useState } from 'react';

import {
  getSections,
  getTestimonials,
  type Section,
  type Testimonial,
} from '../api/content';

import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sec1 from '../components/Sec1';
import Sec2 from '../components/Sec2';
import Sec3 from '../components/Sec3';
import Sec4 from '../components/Sec4';
import SocialBanner from '../components/SocialBanner';
import BenefitCard from '../components/BenefitCard';
import Sec7 from '../components/Sec7';
import Review from '../components/Review';
import Sec6 from '../components/Sec6';
import FloatingPanel from '../components/FloatingPanel';

export default function Home() {
  const [sections, setSections] = useState<Section[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function loadData() {
    try {
      const [s, t] = await Promise.all([getSections(), getTestimonials()]);
      setSections(s);
      setTestimonials(t);
    } catch (err) {
      console.error('API 호출 실패:', err);
    } finally {
      setLoading(false);
    }
  }

  loadData();
}, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400"></p>
      </div>
    );
  }

  const hero = sections.find((s) => s.slug === 'hero');
  const benefits = [
    { id: 1, slug: 'cheap', title: '저렴함', body: '...', image: 'benefit-cheap.png' },
    { id: 2, slug: 'easy', title: '쉬움', body: '...', image: 'benefit-easy.png' },
    { id: 3, slug: 'fast', title: '빠름', body: '...', image: 'benefit-fast.png' },
  ];
  

  return (
    <>
    
    <Header />
    <FloatingPanel />
    
    {/* Padding Wrapper */}
    <div className="px-4 md:px-12 lg:px-32">
      <Sec1 />
      {/* Benefits Section */}
      <section className="my-12">
        <h2 className="text-xl font-bold text-center mb-8">
          카리스카렌트로 만나는 자동차 금융 솔루션!
        </h2>
        <div className="flex flex-row gap-6 overflow-x-auto px-2 min-w-max justify-center">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.id} {...benefit} />
          ))}
        </div>
      </section>
      <Sec3 />
      <Sec4 />
      <SocialBanner />
      <Sec6 />
      <section id="contact-form">
        <ContactForm />
      </section>
      <Sec7 />
      <Review />
    </div>

    <Footer />
      
    </>
  );
}
