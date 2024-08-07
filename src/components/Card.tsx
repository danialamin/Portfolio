import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTowerBroadcast } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Card = (imageName: string, name: string, image: string, description: string, gitHubLink: string, liveLink: string|null) => {
  return (
    <div className={`w-[min(370px,100%)] h-[250px] px-[20px] pt-[40px] z-[50] border-[1px] border-white relative group`}>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image src={image} alt={name} height={250} width={370} />
      </div>
      <div className='absolute top-0 left-0 w-full h-full bg-[#080110] opacity-10 group-hover:opacity-90 transition-all duration-300 z-[1]'></div>

      <div className='hidden group-hover:flex flex-col z-[2]'>
        <div className='w-full flex justify-between items-center z-[2]'>
          <h1 className='text-[1.15rem] font-[700] z-[2]'>{name}</h1>
          <div className='flex gap-[8px]'>
            <Link href={gitHubLink} target="_blank"><FaGithub size={21} className='z-[2]' /></Link>
            {liveLink ? <Link href={liveLink} target="_blank" className='z-[2]'><FaTowerBroadcast size={21} /></Link> : <FaTowerBroadcast size={21} style={{color:'#61605c'}} className='z-[2]' /> }
          </div>
        </div>
        <p className='tracking-tight mt-2 text-[0.93rem] z-[2]'>{description}</p>
      </div>
      

    </div>
  )
}

export default Card