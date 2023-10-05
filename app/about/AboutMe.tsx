"use client";
import React from "react";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div className="md:w-[1000px] h-[500px] mx-auto mt-10  md:mt-32 md:h-[700px]">
      <div className="flex flex-col md:flex-row items-center md:justify-between p-5">
        <div className="w-[300px] md:w-[450px]">
          <Image src="/about.jpg" alt="" width={450} height={100} />
        </div>
        <div className="text-center md:w-[450px]">
          <h2 className="mt-5 text-blue-700 text-2xl font-bold">ABOUT ME</h2>
          <h3 className="text-neutral-900 text-xl font-bold mt-5">
            A dedicated Fullstack Developer based in Nakhon Ratchasima, Thailand
            📍
          </h3>
          <p className="text-neutral-500 mt-5 ">
            As a junior fullstack developer, I have impressive skills in using
            Node.js, Express, and Next.js. I specialize in designing and
            developing websites that offer a user-friendly and smooth
            experience. My expertise lies in creating dynamic and engaging
            interfaces through writing clean code and utilizing modern
            development techniques and tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
