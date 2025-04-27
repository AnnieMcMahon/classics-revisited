import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden flex items-start justify-start pt-32 pl-16"
      id="hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoom"
        style={{ backgroundImage: "url('/images/woodworking/woodworking1.jpeg')" }}
      ></div>

      <div className="relative z-10 bg-black bg-opacity-40 p-8 rounded-lg shadow-lg max-w-80">
        <h1 className="text-4xl mb-4 font-cursive text-center text-white">
          Where Timeless Design <br /> Meets Modern Living
        </h1>

        <p className="text-lg mb-6 text-center text-white">
          At Classics Revisited, we believe that the past and present can coexist beautifully, and we're here to make sure your home reflects both history and modern comfort.
        </p>

        <div className="text-center">
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 bg-white text-black font-bold text-sm rounded-lg hover:bg-gray-600 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
