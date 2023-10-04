"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
const Introduction = () => {
  return (
    <div className="w-[1000px] mx-auto mt-32">
      <div className="flex p-2 justify-between">
        <div>
          <div className="flex">
            <h1 className="text-neutral-900 text-6xl font-bold">
              Fullstack Developer
            </h1>
            <Image
              src="/hi.png"
              alt="Description of the image"
              width={60}
              height={30}
            />
          </div>
          <div className="mt-10">
            <span className="text-xl text-gray-600">
              Hi, I&apos;m Ekkasit ponkhunthod, Fullstack <br /> Developer in
              Nakhon Ratchasima, Thailand. 📍
            </span>
          </div>
          <div className="flex mt-10 w-[100px] justify-around">
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
      <div className="flex justify-center items-center mt-10 h-10">
        <span>
          <h2 className="text-neutral-900 text-xl font-semibold pr-5">
            Tech Stack |
          </h2>
        </span>
        <span className="flex w-[600px] justify-between ">
          <Image src="/html.png" alt="html" width={50} height={30} />
          <Image src="/css.png" alt="css" width={50} height={30} />
          <Image src="/tailwind.png" alt="tailwind" width={50} height={30} />
          <Image
            src="/javascript.png"
            alt="javascript"
            width={50}
            height={30}
          />
          <Image
            src="/typescript.png"
            alt="typescript"
            width={50}
            height={30}
          />
          <Image src="/reactjs.png" alt="reactjs" width={50} height={30} />
          <Image src="/nextjs.png" alt="nextjs" width={50} height={30} />
          <Image src="/nodejs.png" alt="nodejs" width={50} height={30} />
          <Image src="/express.png" alt="express" width={50} height={30} />
          <Image
            src="/postgresql.png"
            alt="postgresql"
            width={50}
            height={30}
          />
        </span>
      </div>
      <div className="flex justify-center items-center my-10 h-10">
        <span>
          <h2 className="text-neutral-900 text-xl font-semibold pr-5">
            Tools |
          </h2>
        </span>
        <span className="flex w-[300px] justify-around ">
          <Image src="/postman.svg" alt="postman" width={50} height={30} />
          <Image src="/prisma.png" alt="prisma" width={50} height={30} />
          <Image src="/supabase.png" alt="supabase" width={50} height={30} />
        </span>
      </div>
    </div>
  );
};

export default Introduction;
