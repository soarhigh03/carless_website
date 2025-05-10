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
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sec3 from '../components/Sec3';
import Sec4 from '../components/Sec4';
import SocialBanner from '../components/SocialBanner';
import Sec7 from '../components/Sec7';

export default function Home() {
  const [sections, setSections] = useState<Section[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getSections(), getTestimonials()]).then(([s, t]) => {
      setSections(s);
      setTestimonials(t);
      setLoading(false);
    });
  }, []);

  if (loading) {
    /* simple splash—replace with skeleton loaders later if you like */
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">로딩 중…</p>
      </div>
    );
  }

  /* slice the fetched data */
  const hero = sections.find((s) => s.slug === 'hero');
  const benefits = sections.filter((s) => s.slug.startsWith('benefit-'));

  return (
    <>
    
    <Header />
    
    {hero && (<Hero {...hero} />)}
      
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

      {/* 3 · Call-to-action strip */}
      <CTA />

      {/* 4 · Testimonials */}
      <TestimonialCarousel items={testimonials} />

      {/* 5 · Contact form */}
      <ContactForm />
      <Sec7 />

      {/* 6 · Footer */}
      <Footer />
      
    </>
  );
}
