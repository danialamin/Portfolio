"use client"

import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { TbShare2 } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import { RiGitForkFill } from "react-icons/ri";

const Header = () => {
  // header will only have bg color if scrolled
  const headerRef = useRef<HTMLDivElement>(null);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;  
      
      if (headerRef.current) {
      if (scrollPosition > 0) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
      }
    })
  }

  // state for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // function to toggle menuOpen
  function handleClick() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <header className="flex breakpoint720:gap-[60px] h-[65px] items-center fixed w-full pl-[25%] z-[100] max-breakpoint910:pl-[5%] max-breakpoint720:pl-0 max-breakpoint720:justify-between shadow-2xl" ref={headerRef}>
      <p className="text-[1.2rem] breakpoint720:hidden font-bold font-sans ml-[20px] z-[99]">DA</p>
      <Link href="/"><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent hover:border-lightPurple transition-all duration-300 max-breakpoint720:hidden"><GoHomeFill />Home</div></Link>
      <Link href="/about"><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent hover:border-lightPurple transition-all duration-300 max-breakpoint720:hidden"><IoPerson />About</div></Link>
      <Link href="/projects"><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent hover:border-lightPurple transition-all duration-300 max-breakpoint720:hidden"><HiMiniPresentationChartBar />Projects</div></Link>
      <Link href="/certificates"><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent hover:border-lightPurple transition-all duration-300 max-breakpoint720:hidden"><TbFileCertificate />Certifications</div></Link>
      <Link href="https://github.com/danialamin/Portfolio" target="_blank"><div className="flex gap-2 items-center text-[white] text-[1.1rem]  px-2 py-2 rounded-md max-breakpoint720:hidden bg-gradient-to-r from-indigo-500 to-purple-500 hover:translate-y-[-2px] transition-all duration-100"><RiGitForkFill /><FaStar /></div></Link>
      <div className="breakpoint720:hidden cursor-pointer mr-[20px] z-[99]" onClick={handleClick}><IoMdMenu style={{'color': 'white'}} size={25} /></div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>  
  )
}

export default Header