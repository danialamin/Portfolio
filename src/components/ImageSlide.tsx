"use client"

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

const ImageSlide = () => {
  const images = [
    {src: '/This1.png', alt: 'image1'},
    {src: '/This2.png', alt: 'image2'},
    {src: '/This3.jpg', alt: 'image3'},
    {src: '/This4.png', alt: 'image4'},
  ]
  return (
    <Swiper navigation pagination={{type : 'fraction'}} modules={[Navigation, Pagination]} className='w-full rounded-lg flex justify-center items-center'>
      {images.map((image, index) =>
        <SwiperSlide key={index}>
          <div className='flex h-full w-full items-center justify-center'>
            {image.alt === 'image3' ? 
            <Image src={image.src} alt={image.alt} width={275} height={275}></Image>
            : <Image src={image.src} alt={image.alt} width={500} height={500}></Image>}
            
          </div>
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default ImageSlide