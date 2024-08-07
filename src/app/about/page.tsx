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

const page = () => {
  return (
    <div className='flex grow justify-center mb-[100px]'>
      <div className='w-[min(100%,1100px)] mt-[170px] flex flex-col items-center gap-[70px] text-center'>
        <div className='flex flex-col text-left'>
          <h1 className='text-center text-3xl'>About <span className='text-lightPurple'>Me</span></h1>
          <div className='mt-[45px] flex flex-col gap-[15px] px-[9px]'>
            <p className='text-[0.98rem] tracking-tight leading-[1.5em]'>Based in Islamabad, I am a First Year student, pursuing a Bachelor&apos;s in Computer Science from <span>FAST-NUCES</span></p>
            <p className='text-[0.98rem] tracking-tight leading-[1.5em]'>My journey in Computer Science began at the age of 14, creating GUIs and scraping the web with Python. However, I ran into trouble when a limited knowledge of HTML & CSS stopped me from scraping websites effectively. This led me to delve into Web Development, at first with the aim of learning enough to increase my scraping prowess. But as time passed, I fell in love with web development and adopted it as a full time passion. As of now, I am an extremely talented Full Stack Developer with a wide range of skills. Web Development also acted as a gateway for me to transition into App Development. (I also topped my province in O&apos;level Maths during the same time)</p>
            <p className='text-[0.98rem] tracking-tight leading-[1.5em]'>As with most people in the tech industry, my interest in AI and Machine Learning peaked after ChatGPT was released in 2022. With my passion compounding every day, as I realized more and more about the potentials of this field in creating impact in the lives of people from every sector and tackling climate change.</p>
            <p className='text-[0.98rem] tracking-tight leading-[1.5em]'>With a strong foundation in problem-solving and a passion for creating impactful solutions, I am sure that I can produce the results you seek, as highlighted by my projects and achievements.</p>
          </div>
        </div>
        <div className='flex flex-col w-full'>
          <h1 className='text-3xl'>Professional <span className='text-lightPurple'>Skillset</span></h1>
          <div className='w-full mt-[45px] flex justify-center flex-wrap gap-6 max-breakpoint720:gap-2'>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <FaPython className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <SiTypescript className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <DiMongodb className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <DiNodejs className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <FaReact className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <SiTailwindcss className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <GrMysql className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <FaGitAlt className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <RiNextjsFill className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <SiPandas className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <SiNumpy className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 z-[50] bg-black relative hoverBgEffect'>
              <p className='text-white text-4xl font-[500]'>C++</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <h1 className='text-3xl'><span className='text-lightPurple'>Softwares</span> I use</h1>
          <div className='w-full mt-[45px] flex justify-center flex-wrap gap-6 max-breakpoint720:gap-2'>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 bg-black z-[50] relative hoverBgEffect'>
              <FaLinux className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 bg-black z-[50] relative hoverBgEffect'>
              <VscVscode className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 bg-black z-[50] relative hoverBgEffect'>
              <SiJupyter className='text-white' size={60} />
            </div>
            <div className='w-[min(180px,100%)] flex justify-center items-center border-[1px] border-[white] py-7 bg-black z-[50] relative hoverBgEffect'>
              <SiNeovim className='text-white' size={60} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page