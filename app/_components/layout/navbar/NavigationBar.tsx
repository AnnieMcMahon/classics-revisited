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
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="container mx-auto pl-5 pr-5 md:px-6 py-3 flex justify-between items-center">
          {/* Logo or Title */}
          <div className="text-xl font-bold text-gray-800">
            <Link href="/" className="m-0 p-0" style={{fontWeight:'0'}}>
              <Image alt="a renovation company" width={50} height={50} src="/images/logos/logo1.webp" />
            </Link>
          
          </div>
  
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-12">
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