"use client"

import Image from "next/image";
import Link from "next/link";
import {navigationData} from './navbarData';
// components/Navbar.js
const NagivationBar = () => {
    return (
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
                  className="text-gray-500 hover:text-gray-900 font-semibold transition-colors"
                  >
                  {item.name}
                 </Link>
                )
              })
            }
           
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none focus:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NagivationBar;