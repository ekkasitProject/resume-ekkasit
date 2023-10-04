import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between shadow-xl  mx-auto p-7 ">
      <div className="pl-4">
        <Link
          href="/"
          className="text-neutral-900 text-xl font-bold hover:text-sky-600 ease-in-out"
        >
          Ekkasit.dev
        </Link>
      </div>
      <div>
        <div className="flex justify-between pr-4 w-[300px]">
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
      </div>
    </nav>
  );
};

export default Navbar;
