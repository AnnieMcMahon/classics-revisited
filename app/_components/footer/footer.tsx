import Image from 'next/image';
import Link from 'next/link';
import { navigationData } from '../../data/navbarData';

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-black p-10 text-white transition-all sm:p-14">
      <div className="xs:ml-5 flex items-center gap-12 md:gap-6">
        <div className="m-auto flex h-[73px] w-[73px] justify-center overflow-hidden rounded-full bg-white">
          <Image
            src="/images/logos/FullLogo_Transparent.png"
            className="object-cover"
            width={400}
            height={400}
            alt="logo"
          />
        </div>

        <div className="ml-7 flex flex-col gap-4 md:ml-10">
          {navigationData.map((item, index) => {
            return (
              <Link key={index} className="text-[14px]" href={item.path}>
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
