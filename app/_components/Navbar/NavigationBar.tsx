'use client';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { navigationData } from '@/app/data/navbarData';
import { AppSidebar } from './Sidebar';

interface NavProps {
  children?: ReactNode;
}

const NagivationBar = ({ children }: NavProps) => {
  return (
    <SidebarProvider>
      <nav className="fixed top-0 z-50 w-full bg-gray-900 p-3 shadow-md md:p-1">
        <div className="container mx-auto flex w-[100%] items-center justify-between py-5 pl-1 pr-2 lg:py-6">
          <div>
            <Link
              href="/#hero"
              className="absolute py-2 -top-2 left-0 m-0 lg:-top-1"
              style={{ fontWeight: '0' }}
            >
              <Image
                alt="a renovation company"
                width={120}
                height={120}
                src="/images/logos/new_fulllogo_transparent.png"
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden w-full justify-end md:flex md:gap-20 lg:gap-24">
            {navigationData?.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className="font-light text-white transition-colors hover:text-gray-300"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <AppSidebar />

            <SidebarTrigger />
            {children}
          </div>
        </div>
      </nav>
    </SidebarProvider>
  );
};

export default NagivationBar;
