import React from 'react'


const Hero = () => {
  return (
    <div className='h-full w-full flex items-center justify-center pt-14'>
      <img className='h-3/5 w-4/5 rounded ' src="/hero.png" alt="img" />
      <div className='absolute text-white flex flex-col items-end bottom-24 right-44'>
        <h1 className='text-7xl uppercase font-medium leading-snug font-nunuto'>featured shoes</h1>
        <p className='text-base font-roboto font-light'>Airy, light, rooted in comfort. Explore the Tree Collection.</p>
        <div className='flex gap-5 py-4 font-arial px-24 text-xl'>
        <button className='py-1 px-5 bg-white text-black uppercase font-roboto hover:bg-black hover:text-white'>shop men</button>
        <button className='py-1 px-5 bg-white text-black uppercase font-roboto hover:bg-black hover:text-white'>shop womem</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
