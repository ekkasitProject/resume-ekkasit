"use client";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
const Contact = () => {
  return (
    <div className="w-[1000px] mx-auto mt-32 h-[500px] ">
      <div>
        <h2 className="text-blue-700 text-2xl font-bold">CONTACT</h2>
        <h3 className="text-neutral-900 text-xl font-bold mt-5">
          Don't be shy! Hit me up! 👇
        </h3>
      </div>
      <div className="flex mt-10  justify-around ">
        <div className="flex items-center ">
          <div className="p-5 shadow-xl rounded-full text-3xl bg-gray-100">
            <GrMapLocation />
          </div>
          <div className="pl-5 ">
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-neutral-500">Nakhon Ratchasima, Thailand</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-5 shadow-xl rounded-full text-3xl bg-gray-100">
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
