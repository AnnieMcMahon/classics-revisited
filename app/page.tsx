'use client';
import About from '@/app/_components/About-Renamed/About';
import ContactForm from '@/app/_components/Contact/ContactForm';
import Services from '@/app/_components/Services/Services';
import Portfolio from '@/app/_components/Portfolio/Portfolio';

export default function Home() {
  return (
    <div>
      <About />
      <Portfolio />
      <Services />
      <ContactForm />
    </div>
  );
}
