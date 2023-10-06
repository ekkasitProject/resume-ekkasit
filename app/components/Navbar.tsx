"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between shadow-md w-full mx-auto p-4 md:p-7">
      <div className="pl-4">
        <Link
          href="/"
          className="text-neutral-900 text-lg md:text-xl font-bold hover:text-sky-600 ease-in-out"
        >
          Ekkasit.dev
        </Link>
      </div>
      <div className="hidden md:flex md:justify-between w-[300px]">
        {/* Responsive Class: Hidden on Mobile */}
        <span>
          <Link
            href="/"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 ease-in-out"
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            href="/about"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 ease-in-out"
          >
            About
          </Link>
        </span>
        <span>
          <Link
            href="/projects"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 ease-in-out"
          >
            Projects
          </Link>
        </span>
        <span>
          <Link
            href="/contact"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 ease-in-out"
          >
            Contact
          </Link>
        </span>
      </div>
      <div className="flex items-center md:hidden">
        {/* Hidden on Desktop */}
        <RxHamburgerMenu
          className={`${isOpen ? "hidden" : "block"} cursor-pointer`}
          onClick={handleToggle}
        />
      </div>
      <div
        className={`md:hidden ${
          isOpen
            ? "fixed top-0 right-0 h-full w-full text-center  bg-white z-50 flex flex-col pt-20 px-4 border-l transition-all duration-1000 ease-in-out"
            : "hidden"
        }`}
      >
        <div className="flex justify-end pr-4">
          <AiOutlineClose
            className="cursor-pointer text-3xl text-neutral-900"
            onClick={handleToggle}
          />
        </div>
        {/* Toggle Visibility on Mobile */}
        <div className="flex flex-col items-center pt-4">
          <Link
            href="/"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 py-2"
            onClick={handleToggle}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 py-2"
            onClick={handleToggle}
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 py-2"
            onClick={handleToggle}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-neutral-900 text-lg font-semibold hover:text-sky-600 py-2"
            onClick={handleToggle}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
