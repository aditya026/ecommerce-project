import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const sale = () => {
  return (
    <div className='w-full h-8 bg-[#3b6638ff]  font-normal flex items-center justify-center text-white uppercase hover'>
      <p className='text-xl'>sale is <span className='text-[#E4003A] hover:text-white'>live</span> now</p>
    </div>
  )
}

export default sale
