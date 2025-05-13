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
    
    <Sec1 />
    <Sec2 />

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
