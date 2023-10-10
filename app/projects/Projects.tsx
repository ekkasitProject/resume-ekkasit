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
    project3: false,
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
    <div className="w-full md:w-3/5 mx-auto mt-8 md:mt-32">
      <div>
        <h2 className="text-blue-700 text-2xl pl-2 md:pl-0 font-bold">
          PORTFOLIO
        </h2>
        <h3 className="text-neutral-900 text-2xl  pl-2 md:pl-0  font-bold mt-5">
          Each project is a unique piece of development 🧩
        </h3>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center p-5 my-5 bg-gray-100 mt-10 shadow-md rounded-lg">
        <div className="w-full md:w-[450px] md:px-20 mt-5">
          <h4 className="text-center text-lg font-bold">
            🛍️ E-Commerce (October 2023)
          </h4>

          <p className="text-center text-neutral-500 mt-5">
            Create an efficient and user-friendly online shopping platform for
            clothing, featuring a convenient shopping cart, secure payment
            system, and detailed product displays for a seamless and confident
            shopping experience.
          </p>

          <div className=" flex justify-around mt-5">
            <span className="p-2 w-[80px] text-center shadow-xl  bg-white rounded-lg">
              Nextjs
            </span>
            <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
              Prisma
            </span>
            <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
              Stripe
            </span>
          </div>
          <p className="p-2 w-full text-center shadow-xl mt-5 bg-red-800 text-white rounded-lg">
            Currently developing
          </p>
          <div className=" flex justify-around mt-10 ">
            <Link
              href={"https://github.com/ekkasitProject/next-e-commerce.git"}
              className=" w-[150px] flex justify-center items-center  hover:text-sky-600 ease-in-out"
              target="_blank"
            >
              Code
              <FiGithub className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
            </Link>
            <Link
              href={"https://ekkasit-e-commerce.vercel.app/"}
              className=" w-[150px] flex justify-center items-center  hover:text-sky-600 ease-in-out"
              target="_blank"
            >
              Live Demo
              <FaExternalLinkAlt className="text-2xl hover:text-sky-600 ease-in-out pl-2" />
            </Link>
          </div>
        </div>
        <div className="w-auto md:w-[500px] h-[350px] relative overflow-hidden">
          <div
            className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
              isHovered.project1 ? "translate-y-[-60%]" : "translate-y-0"
            }`}
            // onMouseEnter={() => handleMouseEnter("project1")}
            // onMouseLeave={() => handleMouseLeave("project1")}
          >
            <Image src="/e-commerce.png" alt="" width={550} height={80} />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center p-5 my-5 bg-gray-100 mt-5 shadow-md rounded-lg">
        <div className="w-auto md:w-[500px] h-[350px] relative overflow-hidden">
          <div
            className={`w-full h-full relative transition-transform duration-1000 ease-in-out transform ${
              isHovered.project2 ? "translate-y-[-140%]" : "translate-y-0"
            }`}
            onMouseEnter={() => handleMouseEnter("project2")}
            onMouseLeave={() => handleMouseLeave("project2")}
          >
            <Image src="/petsitter.png" alt="" width={550} height={80} />
          </div>
        </div>
        <div className="w-full md:w-[450px] md:px-20 mt-5">
          <h4 className="text-center text-lg font-bold">
            🐶Pet Sitter(SEPTEMBER 2023)
          </h4>
          <p className="text-center text-neutral-500 mt-5">
            A website booking to pet boarding with a booking system is an online
            platform that allows users to conveniently book pet boarding
            services for their beloved animals through the website&apos;s online
            booking system.
          </p>
          <div className=" flex justify-around mt-5">
            <span className="p-2 w-[80px] text-center shadow-xl  bg-white rounded-lg">
              React
            </span>
            <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
              tailwind
            </span>
            <span className="p-2 w-[80px] text-center shadow-xl bg-white rounded-lg">
              Nodejs
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

      <div className="flex flex-col-reverse md:flex-row justify-center p-5 my-5 bg-gray-100 mt-10 shadow-md rounded-lg">
        <div className="w-full md:w-[450px] md:px-20 mt-5">
          <h4 className="text-center text-lg font-bold">
            🛒E-Commerce (July 2021)
          </h4>
          <p className="text-center text-neutral-500 mt-5">
            Creating an efficient and user-friendly online shopping platform
            tailored to meet the specific needs and requirements of the company.
          </p>

          <div className=" flex flex-col  justify-around md:mt-0">
            <p className="mx-auto p-2 w-[80px] text-center shadow-xl my-3  bg-white rounded-lg">
              Django
            </p>
            <p className="p-2 w-full text-center shadow-xl  bg-red-800 text-white rounded-lg">
              University graduation project
            </p>
          </div>
          <div className=" flex justify-around mt-10 ">
            <Link
              href={
                "https://github.com/ekkasitProject/finalproject-django-e-commerce"
              }
              className=" w-[150px] flex justify-center items-center  hover:text-sky-600 ease-in-out"
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
              isHovered.project3 ? "translate-y-[-60%]" : "translate-y-0"
            }`}
            onMouseEnter={() => handleMouseEnter("project3")}
            onMouseLeave={() => handleMouseLeave("project3")}
          >
            <Image src="/django.png" alt="" width={550} height={80} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
