"use client"

import Image from "next/image";
import Link from "next/link";
import {navigationData} from './navbarData';
import {AppSidebar} from './Sidebar';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// components/Navbar.js
const NagivationBar = ({children}) => {
    return (
      <SidebarProvider>
        <nav className="bg-white shadow-md fixed p-3 md:p-0 top-0 w-full z-50">
        <div className="container w-[100%] mx-auto pl-1 pr-2 py-5 lg:py-6 flex justify-between items-center">
          {/* Logo or Title */}
          <div className="text-xl w-full font-bold text-gray-800">
            <Link href="/" className="m-0 absolute -top-2 lg:-top-1 left-0" style={{fontWeight:'0'}}>
              <Image alt="a renovation company" width={100} height={100} src="/images/logos/FullLogo_Transparent.png"
              className="object-contain"
              />
            </Link>
          
          </div>
  
          {/* Navigation Links */}
          <div className="hidden md:flex lg:gap-24 justify-end md:gap-20 w-full">
            {
              navigationData?.map((item, index ) => {
                return(
                  <Link
                  href={item.path}
                  key={index}
                  className="text-gray-500 hover:text-gray-900 font-light transition-colors"
                  >
                  {item.name}
                </Link>
                )
              })
            }
          </div>
 
          {/* Mobile Sidebar */}
          <div className="md:hidden">
            <AppSidebar />
          
            <SidebarTrigger />
            {children} 
          </div>          
        </div>
      </nav>
      </SidebarProvider>
      
        
    );
  }
  
  export default NagivationBar;