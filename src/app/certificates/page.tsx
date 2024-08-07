import Image from 'next/image'
import React from 'react'

const Certificates = () => {
  return (
    <div className='mt-[150px] my-[100px] grow flex justify-center'>
      <div className='w-[min(100%,1100px)] grid lg:grid-cols-3 lg:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-4 gap-2 px-[9px] sm:grid-rows-2 sm:grid-cols-2'>
        <Image src="/C1.png" alt="certificate4" width={320} height={180} className='cursor-pointer z-[50]' ></Image>
        <Image src="/image.png" alt="certificate2" width={320} height={180} className='cursor-pointer z-[50]' ></Image>
        <Image src="/C3.png" alt="certificate3" width={320} height={180} className='cursor-pointer z-[50]' ></Image>
        <Image src="/C4.png" alt="certificate1" width={320} height={180} className='cursor-pointer z-[50]' ></Image>
      </div>
    </div>
  )
}

export default Certificates