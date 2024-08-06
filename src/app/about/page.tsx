import React from 'react'
import { FaPython } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaLinux } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiJupyter } from "react-icons/si";
import { SiNeovim } from "react-icons/si";
// import {Tooltip, Button} from "@nextui-org/react";

const page = () => {
  return (
    <div className='flex grow justify-center mb-[100px]'>
      <div className='w-[min(100%,1100px)] mt-[170px] flex flex-col items-center gap-[70px] text-center'>
        <div className='flex flex-col w-full'>
          <h1 className='text-3xl'>Professional <span className='text-lightPurple'>Skillset</span></h1>
          <div className='w-full mt-[45px] flex justify-center flex-wrap gap-6 max-breakpoint720:gap-2'>
            {/* <Tooltip showArrow={true} content="I am a tooltip" color="primary" > */}
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <FaPython className='text-white' size={60} />
            </div>
            {/* </Tooltip> */}
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <SiTypescript className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <DiMongodb className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <DiNodejs className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <FaReact className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <SiTailwindcss className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <GrMysql className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <FaGitAlt className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <RiNextjsFill className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <SiPandas className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <SiNumpy className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <p className='text-white text-4xl font-[500]'>C++</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <h1 className='text-3xl'><span className='text-lightPurple'>Softwares</span> I use</h1>
          <div className='w-full mt-[45px] flex justify-center flex-wrap gap-6 max-breakpoint720:gap-2'>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <FaLinux className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <VscVscode className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <SiJupyter className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7'>
              <SiNeovim className='text-white' size={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page