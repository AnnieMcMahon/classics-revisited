import React from 'react'
import { navigationData } from '../navbar/navbarData'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-10 transition-all sm:p-14 text-white" style={{background: '#000000'}}>
        <div className='flex xs:ml-5 items-center gap-12 md:gap-6'>
            <div className="w-[73px] h-[73px] bg-white rounded-full">

            </div>

            <div className='flex flex-col ml-7 md:ml-10 gap-4'>

                {
                    navigationData.map((item, index) => {
                        return(
                            <Link key={index} className='text-[14px]' href="#" >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className='hidden sm:flex text-[14px]'>
            Social Links
        </div>
    </footer>
  )
}

export default Footer