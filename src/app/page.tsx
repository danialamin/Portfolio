"use client";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import Link from "next/link";

export default function Home() {
  // threeIcons is an array that will get mapped over
  const threeIcons = [
    {icon: 'FaGithub',
     link: "https://github.com/danialamin"
    },
    {icon: 'FaLinkedin',
     link: "https://www.linkedin.com/in/danial-amin-a9796b1b2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBKEcCjtaQWatVHXtyCldmA%3D%3D"
    },
    {icon: 'FaXTwitter',
     link: "https://x.com/amin_dania40798"
    }

  ]
  return (
    <div className="grow flex justify-center">
      <div className="w-[min(100%,970px)] px-[40px] mt-[165px] flex justify-between max-breakpoint910:flex-col max-breakpoint910:items-center">
        <div className="mt-[30px] flex flex-col">
          <h1 className="text-5xl font-[500]">Hi, I&apos;m Danial Amin.</h1>
          <p className="mt-[20px] text-[2.5rem] text-lightPurple">
            <Typewriter
              options={{
                strings: ['Web Developer', 'ML Enthusiast', 'App Developer', 'UG CS Student', 'Researcher'],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="w-[min(450px,100%)] mt-[50px] leading-[1.5em] tracking-[-0.025rem] text-[1.05rem]">A self-driven and disciplined individual with a passion for learning.</p>
          <p className="w-[min(450px,100%)] leading-[1.5em] tracking-[-0.025rem] text-[1.05rem]">Completely dedicated to using ML to solve real-world issues and making the world a better place.</p>
          <ul className="mt-[30px] flex gap-6 relative">
            {threeIcons.map(({icon, link}) =>
              <li key={link} className="home-social-icons">
                <a href={link} target="_blank" className="text-iconColor relative inline-block w-[40px] h-[40px] text-center text-[1.2em] leading-[2em] bg-[rgba(255,255,255,0.972)] rounded-full transition-all duration-500 ">
                  {icon == 'FaGithub' ? <FaGithub className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   : icon == 'FaLinkedin' ? <FaLinkedin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   : <FaXTwitter className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />}
                </a>
              </li>
            )}
          </ul>
          <button className="p-[3px] relative mt-[40px]">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
              <Link href="/about" className="flex justify-center gap-2">
                Read More 
                <CiShare1 size={25} />
              </Link>
            </div>
          </button>
        </div>  
        <div className="max-breakpoint910:mt-[70px] max-breakpoint910:mb-[120px]">
          <Image src="/me-formal-modified.png" alt="my photo" width={320} height={320} />
        </div>
      </div>
    </div>
  );
}
