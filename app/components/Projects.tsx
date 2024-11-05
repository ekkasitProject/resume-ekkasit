"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  const [isHovered, setIsHovered] = useState({
    project1: false,
    project2: false,
    project3: false,
    project4: false,
  });

  const handleMouseEnter = (projectId: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [projectId]: true,
    }));
  };

  const handleMouseLeave = (projectId: string) => {
    setIsHovered((prevState) => ({
      ...prevState,
      [projectId]: false,
    }));
  };

  return (
    <div id="projects" className="md:w-[1000px] mx-auto mt-32 h-auto md:h-full">
      <div>
        <h2 className="text-blue-700 text-2xl pl-2 md:pl-0 font-bold">
          PORTFOLIO
        </h2>
        <h3 className="text-neutral-900 text-2xl pl-2 md:pl-0 font-bold mt-5">
          Each project is a unique piece of development 🧩
        </h3>
      </div>

      {/* Mobile Applications Section */}
      <div className="mt-8 md:mt-10">
        <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-5">📱 Mobile Applications</h2>
        <div className="flex flex-col md:flex-row justify-center p-4 md:p-5 my-4 md:my-5 bg-gray-100 shadow-md rounded-lg">
          <div className="w-full md:w-[500px] relative overflow-hidden">
            <div
              className={`w-full relative transition-transform duration-1000 ease-in-out transform `}
            >
              {/* Mobile: Single image centered */}
              <div className=" md:hidden w-full flex justify-center">
                <img 
                  src="/onehub1.png" 
                  alt="OneHub Mobile" 
                  className="w-[180px] h-[410px] object-cover rounded-lg"
                />
              </div>
              
              {/* Desktop: Two images side by side */}
              <div className="hidden md:flex w-[500px] justify-around">
                <img 
                  src="/onehub1.png" 
                  alt="OneHub Screen 1" 
                  className="w-[180px] h-[410px] object-cover rounded-lg"
                />
                <img 
                  src="/onehub2.png" 
                  alt="OneHub Screen 2" 
                  className="w-[180px] h-[410px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-[450px] md:px-20 mt-4 md:mt-5">
            <h4 className="text-center text-base md:text-lg font-bold">
            OneHub (Partner Application)
            </h4>
            <p className="text-center text-sm md:text-base text-neutral-500 mt-3 md:mt-5">
              Build a company application specifically designed for partners,
              providing easy access to essential resources, real-time data
              insights, and seamless communication tools to support effective
              collaboration and strengthen partner relationships.
            </p>
            <div className="flex justify-center gap-4 mt-4 md:mt-5">
              <span className="p-2 w-[80px] text-sm md:text-base text-center shadow-xl bg-white rounded-lg">
                Flutter
              </span>
              <span className="p-2 w-[80px] text-sm md:text-base text-center shadow-xl bg-white rounded-lg">
                Golang
              </span>
            </div>
            <p className="p-2 w-full text-sm md:text-base text-center shadow-xl mt-4 md:mt-5 bg-red-800 text-white rounded-lg">
              Currently developing
            </p>
          </div>
        </div>
      </div>

      {/* Web Applications Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-5 pl-2 md:pl-0">🌐 Web Applications</h2>
        
        {/* Company Web Application */}
        <div className="flex flex-col-reverse md:flex-row justify-center p-5 my-5 bg-gray-100 shadow-md rounded-lg">
          <div className="w-full md:w-[450px] md:px-20 mt-5">
            <h4 className="text-center text-lg font-bold">
              Company Web Platform
            </h4>
            <p className="text-center text-neutral-500 mt-5">
              Develop a web application for the company that enhances user
              experience with an intuitive interface, efficient data management,
              and secure backend infrastructure, tailored to meet specific
              business needs and drive customer engagement.
            </p>
            <div className="flex justify-around mt-5">
              <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
                Nuxtjs
              </span>
              <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
                Golang
              </span>
              <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
                AWS (S3)
              </span>
            </div>
            <p className="p-2 w-full text-center shadow-xl mt-5 bg-red-800 text-white rounded-lg">
              Currently developing
            </p>
          </div>
          <div className="w-auto md:w-[500px] h-[350px] relative overflow-hidden">
            <div
              className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
                isHovered.project2 ? "translate-y-[-60%]" : "translate-y-0"
              }`}
              onMouseEnter={() => handleMouseEnter("project2")}
              onMouseLeave={() => handleMouseLeave("project2")}
            >
              <Image src="/website-onecharge.png" alt="" width={550} height={80} />
            </div>
          </div>
        </div>

        {/* Pet Sitter Project */}
        <div className="flex flex-col md:flex-row justify-center p-5 my-5 bg-gray-100 shadow-md rounded-lg">
          <div className="w-auto md:w-[500px] h-[350px] relative overflow-hidden">
            <div
              className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
                isHovered.project3 ? "translate-y-[-140%]" : "translate-y-0"
              }`}
              onMouseEnter={() => handleMouseEnter("project3")}
              onMouseLeave={() => handleMouseLeave("project3")}
            >
              <Image src="/petsitter.png" alt="" width={550} height={80} />
            </div>
          </div>
          <div className="w-full md:w-[450px] md:px-20 mt-5">
            <h4 className="text-center text-lg font-bold">
              🐶 Pet Sitter (SEPTEMBER 2023)
            </h4>
            <p className="text-center text-neutral-500 mt-5">
              A website booking to pet boarding with a booking system is an online
              platform that allows users to conveniently book pet boarding
              services for their beloved animals through the website&apos;s online
              booking system.
            </p>
            <div className="flex justify-around mt-5">
              <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
                React
              </span>
              <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
                tailwind
              </span>
              <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
                Nodejs
              </span>
            </div>
            <div className="flex justify-around mt-10">
              <Link
                href="https://github.com/ekkasitProject/Pet-Sitter-App"
                className="w-[150px] flex justify-center items-center hover:text-sky-600 ease-in-out"
                target="_blank"
              >
                Code
                <FiGithub className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
              </Link>
              <Link
                href="/"
                className="w-[150px] flex justify-center items-center hover:text-sky-600 ease-in-out"
                target="_blank"
              >
                Live Demo
                <FaExternalLinkAlt className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* E-Commerce Project */}
        <div className="flex flex-col-reverse md:flex-row justify-center p-5 my-5 bg-gray-100 shadow-md rounded-lg">
          <div className="w-full md:w-[450px] md:px-20 mt-5">
            <h4 className="text-center text-lg font-bold">
              🛒 E-Commerce (July 2021)
            </h4>
            <p className="text-center text-neutral-500 mt-5">
              Creating an efficient and user-friendly online shopping platform
              tailored to meet the specific needs and requirements of the company.
            </p>
            <div className="flex flex-col justify-around md:mt-0">
              <p className="mx-auto p-2 w-[80px] text-center shadow-xl my-3 bg-white rounded-lg">
                Django
              </p>
              <p className="p-2 w-full text-center shadow-xl bg-red-800 text-white rounded-lg">
                University graduation project
              </p>
            </div>
            <div className="flex justify-around mt-10">
              <Link
                href="https://github.com/ekkasitProject/finalproject-django-e-commerce"
                className="w-[150px] flex justify-center items-center hover:text-sky-600 ease-in-out"
                target="_blank"
              >
                Code
                <FiGithub className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
              </Link>
            </div>
          </div>
          <div className="w-auto md:w-[500px] h-[350px] relative overflow-hidden">
            <div
              className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
                isHovered.project4 ? "translate-y-[-60%]" : "translate-y-0"
              }`}
              onMouseEnter={() => handleMouseEnter("project4")}
              onMouseLeave={() => handleMouseLeave("project4")}
            >
              <Image src="/django.png" alt="" width={550} height={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;