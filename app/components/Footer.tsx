import Link from "next/link";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
const Footer = () => {
  return (
    <div className="bg-neutral-800">
      <div className="w-3/4 flex justify-between mx-auto p-14">
        <div className="w-[400px]">
          <h3 className="text-white font-bold">
            Copyright © 2023. All rights are reserved.
          </h3>
        </div>
        <div className="flex justify-between text-white w-[70px]">
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
  );
};

export default Footer;
