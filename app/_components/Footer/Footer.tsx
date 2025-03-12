import Image from 'next/image';
import Link from 'next/link';
import { navigationData, galleryData } from '@/app/data/navbarData';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-black p-10 text-white transition-all">
      <div className="flex items-center gap-8 md:gap-24">
        <Link
          href="/#hero"
          className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white"
        >
          <Image
            src="/images/logos/FullLogo_Transparent.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </Link>

        <div className="flex flex-col">
          {navigationData.map((item, index) => {
            return (
              <Link
                key={index}
                className="text-sm/6 hover:text-neutral-400"
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col">
          {galleryData.map((item, index) => {
            return (
              <Link
                key={index}
                className="text-sm/6 hover:text-neutral-400"
                href={item.path}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      {/* <div className="hidden text-[14px] sm:flex">Social Links</div> */}
    </footer>
  );
};

export default Footer;
