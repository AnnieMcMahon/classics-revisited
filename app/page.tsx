"use client"
import About from "@/app/_components/about/about";
import ContactForm from "@/app/_components/ContactForm";

export default function Home() {
  return (
    <div className="pt-20">
      <h1>Classics Revisited</h1>
      <About />
      <ContactForm />
    </div>
  );
}
