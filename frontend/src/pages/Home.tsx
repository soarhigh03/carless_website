import React, { useEffect, useState } from 'react';
import { getSections, getTestimonials } from '../api/content';
import type { Section, Testimonial } from '../api/content';
import Hero from '../components/Hero';
import BenefitCard from '../components/BenefitCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const [sections, setSections] = useState<Section[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    Promise.all([getSections(), getTestimonials()]).then(([s, t]) => {
      setSections(s);
      setTestimonials(t);
    });
  }, []);

  const hero = sections.find(s => s.slug === 'hero');
  const benefits = sections.filter(s => s.slug.startsWith('benefit-'));

  return (
    <>
      {hero && <Hero {...hero} />}
      {benefits.length > 0 && (
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6 my-12">
          {benefits.map(b => (
            <BenefitCard key={b.id} {...b} />
          ))}
        </section>
      )}
      <TestimonialCarousel items={testimonials} />
      <ContactForm />
      <Footer />
    </>
  );
}
