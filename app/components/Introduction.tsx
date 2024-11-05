"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoGoLang,
  BiLogoFlutter,
  BiLogoMongodb,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiApachekafka, SiDocker, SiExpress, SiFirebase, SiPostman, SiPrisma, SiSupabase } from "react-icons/si";
const Introduction = () => {
  return (
    <div
      id="introduction"
      className=" w-full md:w-[1000px] mx-auto mt-32 p-2 md:h-[500px]"
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-10 md:mb-0">
          <div className="flex items-center">
            <h1 className="text-neutral-900 mx-auto text-4xl md:text-6xl font-bold">
              Fullstack Developer
            </h1>
            <Image
              src="/hi.png"
              alt="Description of the image"
              width={40}
              height={20}
              className="hidden md:block"
            />
          </div>
          <div>
            <div className="mt-10">
              <span className="text-xl text-gray-600">
                Hi, I&apos;m Ekkasit ponkhunthod, Fullstack <br /> Developer in
                Muangthong Nonthaburi, Thailand. 📍
              </span>
            </div>
            <div className="flex mt-10 md:mt-0  md:w-[100px] justify-around">
              <Link
                href="https://www.linkedin.com/in/ekkasit-ponkhunthod"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineLinkedin className="text-3xl hover:text-sky-600 ease-in-out" />
              </Link>
              <Link
                href="https://github.com/ekkasitProject"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-3xl hover:text-sky-600 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/logo.jpg"
            alt=""
            width={300}
            height={300}
            className="border-4 rounded-full border-neutral-800 animate-borderAnimation"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center mt-10 md:h-10">
        <span>
          <h2 className="text-neutral-900 text-xl font-semibold pr-5 hidden md:block">
            Tech Stack |
          </h2>
        </span>
        <span>
          <h2 className=" text-neutral-900 text-xl font-semibold pr-5  md:hidden ">
            Tech Stack
          </h2>
        </span>
        <span className="flex flex-wrap   px-2 justify-center md:flex-nowrap md:w-[700px]  md:justify-between ">
          <BiLogoHtml5 size={70} className="hover:text-sky-600 px-2" />
          <BiLogoCss3 size={70} className="hover:text-sky-600 px-2" />
          <BiLogoTailwindCss size={70} className="hover:text-sky-600 px-2" />
          <BiLogoGoLang size={70} className="hover:text-sky-600 px-2" />
          <BiLogoFlutter size={70} className="hover:text-sky-600 px-2" />
          <BiLogoJavascript size={70} className="hover:text-sky-600 px-2" />
          <BiLogoReact size={70} className="hover:text-sky-600 px-2" />
          <TbBrandNextjs size={70} className="hover:text-sky-600 px-2" />
          <BiLogoNodejs size={70} className="hover:text-sky-600 px-2" />
          <BiLogoPostgresql size={70} className="hover:text-sky-600 px-2" />
          <BiLogoMongodb size={70} className="hover:text-sky-600 px-2" />
          
        </span>
      </div>
      <div className="flex flex-col justify-center md:flex-row items-center mt-10 md:h-10">
        <span>
          <h2 className="text-neutral-900 text-xl font-semibold pr-5">
            Tools |
          </h2>
        </span>
        <span className="flex flex-wrap   px-2 justify-center md:flex-nowrap md:w-[400px]  md:justify-between ">
          <SiPostman size={70} className="hover:text-sky-600 px-2" />
          <SiDocker size={70} className="hover:text-sky-600 px-2" />
          <SiFirebase size={70} className="hover:text-sky-600 px-2" />
          <SiPrisma size={70} className="hover:text-sky-600 px-2" />
          <SiSupabase size={70} className="hover:text-sky-600 px-2" />
        </span>
      </div>
    </div>
  );
};

export default Introduction;
