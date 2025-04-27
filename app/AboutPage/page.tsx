export default function AboutPage() {
  return (
    <div className="py-24 px-8 lg:px-32">
      <div className="lg:px-32">
        <h2 className="p-2 text-2xl font-bold">
          Our Mission
        </h2>

        <p className="p-2 text-lg">
        At Classics Revisited, we are dedicated to remodeling historic homes and recreating classical details in modern residences. We offer a personalized, hands-on experience for every project — from minor repairs to full-scale renovations — always striving to exceed your expectations.
        </p>

        <div className="flex flex-col md:flex-row gap-8">

        <div className="my-4 mx-24 md:mx-12 lg:mx-8 md:w-[40%]">
          <img src="/images/main-pics/AboutUs.jpeg" alt="About Us" className="rounded-lg shadow-lg" />
        </div>

        <div className="md:w-[60%]">
        <h2 className="p-2 text-2xl font-bold">
          About Us
        </h2>

        <p className="p-2 text-lg">
        Founded in 1988, our family of companies has built a reputation for quality, integrity, and reliability. With over four decades of experience preserving the historic homes of New York City's suburbs, we have had the privilege of restoring some of the finest examples of 19th-century Revival architecture. <br/><br/>
Our passion lies in honoring the past while building for the future. As a full-service remodeling company, we combine a hands-on lead carpenter model with fixed pricing and complete transparency — an approach that is both efficient and uniquely personal. We are proud to bring this same commitment to excellence to the Asheville area.
        </p>
        <h2 className="p-2 text-2xl font-bold ">
        Our Team
        </h2>

        <p className="p-2 text-lg">
        In the luxury housing market of Western North Carolina, we have developed strong relationships with skilled local tradespeople and trusted vendors. Our team shares a deep dedication to craftsmanship, ensuring each project is completed with exceptional quality while remaining mindful of affordability.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}
