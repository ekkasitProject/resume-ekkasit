"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
const Introduction = () => {
  return (
    <div className=" w-full md:w-[1000px] mx-auto mt-32 p-2 md:h-[700px]">
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
                Nakhon Ratchasima, Thailand. 📍
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
      <div className="flex flex-col  h-[50px] justify-center md:flex-row items-center mt-10 md:h-10">
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
        <span className="flex flex-wrap  w-[390px] px-2 justify-between mt-5 md:flex-nowrap md:w-[600px]  md:justify-between ">
          <img
            src="/html.png"
            alt="html"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/css.png"
            alt="css"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/tailwind.png"
            alt="tailwind"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/javascript.png"
            alt="javascript"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/typescript.png"
            alt="typescript"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/reactjs.png"
            alt="reactjs"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/nextjs.png"
            alt="nextjs"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/nodejs.png"
            alt="nodejs"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/express.png"
            alt="express"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/postgresql.png"
            alt="postgresql"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
        </span>
      </div>
      <div className="flex justify-center items-center my-10 h-10">
        <span>
          <h2 className="text-neutral-900 text-xl font-semibold pr-5">
            Tools |
          </h2>
        </span>
        <span className="flex md:w-[300px] justify-around ">
          <img
            src="/postman.svg"
            alt="postman"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/prisma.png"
            alt="prisma"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
          <img
            src="/supabase.png"
            alt="supabase"
            className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
          />
        </span>
      </div>
    </div>
  );
};

export default Introduction;
