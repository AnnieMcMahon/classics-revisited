import React from 'react'
import { navigationData } from '../navbar/navbarData'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-10 text-white" style={{background: '#000000'}}>
        <div className='flex xs:ml-5 items-center gap-12 md:gap-6'>
            <div className="w-20 h-20 bg-white rounded-full">

            </div>

            <div className='flex flex-col'>

                {
                    navigationData.map((item, index) => {
                        return(
                            <Link className='f' href="#" >
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className='hidden md:flex'>
            Social Links
        </div>
    </footer>
  )
}

export default Footer