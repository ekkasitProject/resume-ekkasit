"use client";
import React from "react";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div
      id="about"
      className="md:w-[1000px] h-[500px] mx-auto mt-10  md:mt-32 md:h-[300px]"
    >
      <div className="flex flex-col md:flex-row items-center md:justify-between p-5">
        <div className="w-[300px] md:w-[450px]">
          <Image src="/about.jpg" alt="" width={450} height={100} />
        </div>
        <div className="text-center md:w-[450px]">
          <h2 className="mt-5 text-blue-700 text-2xl font-bold">ABOUT ME</h2>
          <h3 className="text-neutral-900 text-xl font-bold mt-5">
            A dedicated Fullstack Developer based in Muangthong Nonthaburi, Thailand 📍
          </h3>
          <p className="text-neutral-500 mt-5 ">
            As a junior fullstack developer with 1 year of experience, I possess
            strong skills in Node.js, Express, Next.js, Flutter, Golang, and
            AWS. I specialize in designing and developing websites and
            applications that offer a user-friendly and seamless experience. My
            expertise lies in creating dynamic and engaging interfaces, along
            with utilizing modern development techniques and tools to meet user
            needs effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
