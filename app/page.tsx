'use client';
import About from '@/app/_components/About/About';
import ContactForm from '@/app/_components/Contact/ContactForm';
import Services from '@/app/_components/Services/Services';
import Portfolio from '@/app/_components/Portfolio/Portfolio';
import Hero from '@/app/_components/Hero/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <ContactForm />
    </div>
  );
}
