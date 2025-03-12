import Link from "next/link";

export default function Hero() {
  return (
    <div className="border px-8 pt-16 flex flex-col lg:flex-row md:align-center" id="hero">
      <div className="lg:w-[60%] order-first lg:order-last">
        <img src="images/main-pics/hero.jpeg" alt="Hero Image" className="mb-8 lg:mb-0" />
      </div>
      <div className="lg:w-[40%]">
        <h1 className="text-2xl/10 font-bold md:text-[2rem] lg:mt-24">
          Where Timeless Design <br/> Meets Modern Living
        </h1>

        <p className="lg:w-[80%] lg:pr-8 lg:py-12 py-4 text-lg">
        At Classics Revisited, we believe that the past and present can coexist beautifully, and we&apos;re here to make sure your home reflects both history and modern comfort.
        </p>
        <div className="my-8">
        <Link href="/#contact" className="px-4 py-4 bg-black text-white font-bold text-sm rounded-lg hover:bg-gray-600 transition">Contact Us Today</Link>
        </div>
      </div>
    </div>
  );
}