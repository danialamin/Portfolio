"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import ImageSlide from '@/components/ImageSlide'

const Certificates = () => {
  const [showSlider, setShowSlider] = useState(false)

  const handleClick = () => {
    setShowSlider(true)
  }

  // pressing anywhere outside ImageSlide will change showSlider to false 
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {

      const handleClickOutside = (event: MouseEvent) => {
          if (showSlider && !sliderRef.current?.contains(event.target as Node)) {
              setShowSlider(false);
          }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
    }}
    }, [showSlider, sliderRef]);

  return (
    showSlider ? (
    <div className='grow'>
      <div className='z-[70] absolute top-[40%] left-0 w-full' ref={sliderRef}>
        <ImageSlide />
      </div>
    </div> )
    :
    <div className='mt-[150px] my-[100px] grow flex flex-col items-center justify-center'>
      <div className='w-[min(100%,1100px)] flex justify-center'>
        <div>
          <div className='grid lg:grid-cols-3 lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-x-5 md:gap-y-8 gap-y-3 px-[9px] sm:grid-rows-2 sm:grid-cols-2'>
            <Image src="/C1.png" alt="certificate4" width={300} height={200} className='cursor-pointer z-[50]' onClick={handleClick} ></Image>
            <Image src="/C2.png" alt="certificate2" width={300} height={200} className='cursor-pointer z-[50]' onClick={handleClick}></Image>
            <Image src="/C3.png" alt="certificate3" width={300} height={200} className='cursor-pointer z-[50]' onClick={handleClick}></Image>
            <Image src="/C4.png" alt="certificate1" width={300} height={200} className='cursor-pointer z-[50]' onClick={handleClick}></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates