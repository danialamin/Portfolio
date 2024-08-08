import Link from 'next/link'
import React from 'react'
import { FaStar } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { HiMiniPresentationChartBar } from 'react-icons/hi2'
import { IoPerson } from 'react-icons/io5'
import { RiGitForkFill } from 'react-icons/ri'
import { TbFileCertificate, TbShare2 } from 'react-icons/tb'

type PropsType = {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MobileMenu = ({menuOpen, setMenuOpen}: PropsType) => {

  // toggle menuOpen
  function handleClick() {
    setMenuOpen((prev) => !prev);
  }
  return (
    <div className={`fixed ${menuOpen ? 'top-0' : 'top-[-80vh]'} left-0 w-full h-[55vh] bg-[#080110] z-[12] transition-all duration-400 breakpoint720:hidden`}>
      <div className="flex flex-col justify-evenly items-center h-full mt-5">
        <Link href="/" onClick={handleClick}><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent active:border-lightPurple hover:border-lightPurple transition-all duration-300"><GoHomeFill />Home</div></Link>
        <Link href="/about" onClick={handleClick}><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent active:border-lightPurple hover:border-lightPurple transition-all duration-300"><IoPerson />About</div></Link>
        <Link href="/projects" onClick={handleClick}><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent active:border-lightPurple hover:border-lightPurple transition-all duration-300"><HiMiniPresentationChartBar />Projects</div></Link>
        <Link href="/certificates" onClick={handleClick}><div className="flex gap-1 items-center text-[white] text-[1.1rem] border-b-2 border-transparent active:border-lightPurple hover:border-lightPurple transition-all duration-300"><TbFileCertificate />Certifications</div></Link>
        <Link href="https://github.com/danialamin/Portfolio" target="_blank"><div className="flex gap-2 items-center text-[white] text-[1.1rem]  px-2 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 active:translate-y-[-2px] hover:translate-y-[-2px] transition-all duration-100"><RiGitForkFill /><FaStar /></div></Link>
      </div>
    </div>
  )
}

export default MobileMenu