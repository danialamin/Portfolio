import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
  return (
    <footer className="bg-[#080110] flex justify-between items-center min-h-[40px] py-4 max-breakpoint720:flex-col sm:px-20 max-breakpoint720:gap-2 z-[50]">
      <div className='text-center'>
        Designed by Danial Amin
      </div>
      <div className='text-center'>
        Copyright © 2024
      </div>
      <div className='flex gap-[12px]'>
        <Link href="https://github.com/danialamin" target="_blank"><FaGithub size={20} /></Link>
        <Link href="mailto:danialamin489@gmail.com" target="_blank"><BiLogoGmail size={20} /></Link>
        <Link href="https://www.linkedin.com/in/danial-amin-a9796b1b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBKEcCjtaQWatVHXtyCldmA%3D%3D" target="_blank"><FaLinkedin size={20} /></Link>
        <Link href="https://x.com/amin_dania40798" target="_blank"><FaXTwitter size={20} /></Link>
      </div>
    </footer>
  )
}

export default Footer