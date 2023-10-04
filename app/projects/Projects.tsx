"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
const Projects = () => {
  const [isHovered, setIsHovered] = useState({
    project1: false,
    project2: false,
  });

  const handleMouseEnter = (projectId: string) => {
    setIsHovered((prevState) => {
      return {
        ...prevState,
        [projectId]: true,
      };
    });
  };

  const handleMouseLeave = (projectId: string) => {
    setIsHovered((prevState) => {
      return {
        ...prevState,
        [projectId]: false,
      };
    });
  };

  return (
    <div className="w-[1000px] mx-auto mt-32">
      <div>
        <h2 className="text-blue-700 text-2xl font-bold">PORTFOLIO</h2>
        <h3 className="text-neutral-900 text-2xl font-bold mt-5">
          Each project is a unique piece of development 🧩
        </h3>
      </div>
      <div className="flex justify-center p-5 my-5 bg-gray-100 mt-5 shadow-md rounded-lg">
        <div className="w-[500px] h-[350px] relative overflow-hidden">
          <div
            className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
              isHovered.project1 ? "translate-y-[-180%]" : "translate-y-0"
            }`}
            onMouseEnter={() => handleMouseEnter("project1")}
            onMouseLeave={() => handleMouseLeave("project1")}
          >
            <Image src="/petsitter.png" alt="" width={550} height={80} />
          </div>
        </div>
        <div className="w-[450px] px-20 mt-5">
          <h4 className="text-center text-lg font-bold">
            🐶Pet Sitter(SEPTEMBER 2023)
          </h4>
          <p className="text-center text-neutral-500 mt-5">
            A website related to pet boarding with a booking system is an online
            platform that allows users to conveniently book pet boarding
            services for their beloved animals through the website's online
            booking system.
          </p>
          <div className=" flex justify-around mt-5">
            <span className="p-2 w-[80px] text-center shadow-xl  bg-white rounded-lg">
              React
            </span>
            <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
              SCSS
            </span>
          </div>
          <div className=" flex justify-around mt-10 ">
            <Link
              href={"https://github.com/ekkasitProject/Pet-Sitter-App"}
              className=" w-[150px] flex justify-center items-center  hover:text-sky-600 ease-in-out"
              target="_blank"
            >
              Code
              <FiGithub className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
            </Link>
            <Link
              href={"/"}
              className=" w-[150px] flex justify-center items-center hover:text-sky-600 ease-in-out"
              target="_blank"
            >
              Live Demo
              <FaExternalLinkAlt className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-5 my-5 bg-gray-100 mt-5 shadow-md rounded-lg">
        <div className="w-[450px] px-20 mt-5">
          <h4 className="text-center">
            <b>CAR RENTAL</b> (FEBRUARY 2023) 🚗
          </h4>
          <p className="text-center text-neutral-500 mt-5">
            A car rental website is an online platform that allows users to rent
            cars for personal or business use. The website provides an interface
            for searching, comparing, and reserving cars.
          </p>
          <div className=" flex justify-around mt-5">
            <span className="p-2 w-[80px] text-center shadow-xl  bg-white rounded-lg">
              React
            </span>
            <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
              SCSS
            </span>
          </div>
          <div className=" flex justify-around mt-10 ">
            <Link
              href={"https://github.com/ekkasitProject"}
              className=" w-[150px] flex justify-center items-center  hover:text-sky-600 ease-in-out"
            >
              Code
              <FiGithub className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
            </Link>
            <Link
              href={"/"}
              className=" w-[150px] flex justify-center items-center hover:text-sky-600 ease-in-out"
            >
              Live Demo
              <FaExternalLinkAlt className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
            </Link>
          </div>
        </div>
        <div className="w-[500px] h-[350px] relative overflow-hidden">
          <div
            className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
              isHovered.project2 ? "translate-y-[-100%]" : "translate-y-0"
            }`}
            onMouseEnter={() => handleMouseEnter("project2")}
            onMouseLeave={() => handleMouseLeave("project2")}
          >
            <Image src="/about.jpg" alt="" width={550} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
