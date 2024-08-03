import Link from 'next/link'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#080110] flex justify-center items-center gap-[12px] h-[40px] py-2">
      <Link href="https://github.com/danialamin" target="_blank" className=""><FaGithub size={25} /></Link>
      <Link href="https://www.linkedin.com/in/danial-amin-a9796b1b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBKEcCjtaQWatVHXtyCldmA%3D%3D" target="_blank"><FaLinkedin size={25} /></Link>
      <Link href="https://x.com/amin_dania40798" target="_blank"><FaXTwitter size={25} /></Link>
    </footer>
  )
}

export default Footer