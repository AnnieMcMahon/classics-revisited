'use client';
import About from '@/app/_components/About/About';
import ContactForm from '@/app/_components/Contact/ContactForm';
import Services from '@/app/_components/Services/Services';
import Portfolio from '@/app/_components/Portfolio/Portfolio';

export default function Home() {
  return (
    <div className="pt-20">
      <About />
      <Portfolio />
      <Services />
      <ContactForm />
    </div>
  );
}
