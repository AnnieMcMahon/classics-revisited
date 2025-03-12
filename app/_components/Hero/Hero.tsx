export default function Hero() {
  return (
    <div className="border px-8 mt-16 flex flex-col lg:flex-row md:align-center" id="hero">
      <div className="lg:w-[60%] order-first lg:order-last">
        <img src="images/main-pics/hero.jpeg" alt="Hero Image" className="mb-8 lg:mb-0 h-full" />
      </div>
      <div className="lg:w-[40%]">
        <h1 className="text-2xl font-bold lg:text-[2rem] lg:mt-24">
          Where Timeless Design <br/> Meets Modern Living
        </h1>

        <p className="md:w-[70%] md:pr-12 md:py-12 py-4">
        At Classics Revisited, we believe that the past and present can coexist beautifully, and we&apos;re here to make sure your home reflects both history and modern comfort.
        </p>
        <div className="my-8">
        <a href="/#contact" className="px-4 py-4 bg-black text-white font-bold text-sm rounded-lg hover:bg-gray-600 transition">Contact Us Today</a>
        </div>
      </div>
    </div>
  );
}