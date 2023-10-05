"use client";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
const Contact = () => {
  return (
    <div className="md:w-[1000px] mx-auto mt-32 h-[500px] md:h-[700px]">
      <div>
        <h2 className="text-blue-700 text-2xl pl-2 font-bold">CONTACT</h2>
        <h3 className="text-neutral-900 text-xl pl-2 font-bold mt-5">
          Don&apos;t be shy! Hit me up! 👇
        </h3>
      </div>
      <div className="flex flex-col md:flex-row mt-10  md:justify-around ">
        <div className="w-full mx-auto flex items-center  ">
          <div className="p-5 shadomd:w-xl rounded-full text-3xl bg-gray-100">
            <GrMapLocation />
          </div>
          <div className="pl-5 ">
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-neutral-500">Nakhon Ratchasima, Thailand</p>
          </div>
        </div>
        <div className="w-full mx-auto flex items-center ">
          <div className="p-5 shadomd:w-xl rounded-full text-3xl bg-gray-100">
            <AiOutlineMail />
          </div>
          <div className="pl-5 ">
            <h4 className="text-lg font-semibold">Mail</h4>
            <Link
              href={"mailto:Ekkasitprivate@gmail.com"}
              className="text-neutral-500"
            >
              Ekkasitprivate@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
