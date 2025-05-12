import React, { useEffect, useState } from 'react';

import {
  getSections,
  getTestimonials,
  type Section,
  type Testimonial,
} from '../api/content';

import Hero from '../components/Hero';
import BenefitCard from '../components/BenefitCard';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sec3 from '../components/Sec3';
import Sec4 from '../components/Sec4';
import SocialBanner from '../components/SocialBanner';
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
        <p className="text-gray-400">로딩 중…</p>
      </div>
    );
  }

  const hero = sections.find((s) => s.slug === 'hero');
  const benefits = sections.filter((s) => s.slug.startsWith('benefit-'));

  return (
    <>
    
    <Header />
    <FloatingPanel />
    
    {hero && <Hero {...{ ...hero, image: hero.image || '' }} />}
      
    {benefits.length > 0 && (
    <section className="max-w-6xl mx-auto grid gap-6 px-4 my-12 sm:grid-cols-2 md:grid-cols-3">
        {benefits.map((b) => (
        <BenefitCard key={b.id} {...b} />
        ))}
    </section>
    )}

    <Sec3 />
    

    <Sec4 />
    <SocialBanner />

    

    
    <Sec6 />
    <section id="contact-form">
        <ContactForm />
    </section>

    <Sec7 />
    <Review />

    <Footer />
      
    </>
  );
}
