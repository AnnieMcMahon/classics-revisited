'use client';
import About from '@/app/_components/about/about';
import ContactForm from '@/app/_components/ContactForm';
import Services from '@/app/_components/services/services';

export default function Home() {
  return (
    <div className="pt-20">
      <h1>Classics Revisited</h1>
      <About />
      <Services />
      <ContactForm />
    </div>
  );
}
