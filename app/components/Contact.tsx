"use client";
import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
const Contact = () => {
  const contactItems = [
    {
      icon: <GrMapLocation className="text-3xl" />,
      title: "Location",
      content: "Nakhon Ratchasima, Thailand",
    },
    {
      icon: <AiOutlineMail className="text-3xl" />,
      title: "Mail",
      content: (
        <a href="mailto:Ekkasitprivate@gmail.com" className="text-neutral-500">
          ekkasitprivate@gmail.com
        </a>
      ),
    },
    {
      icon: <AiOutlinePhone className="text-3xl" />,
      title: "Phone",
      content: (
        <a href="tel:080-9791996" className="text-neutral-500">
          080-9791996
        </a>
      ),
    },
  ];
  return (
    <div id="contact" className="md:w-[1000px] mx-auto mt-32 h-[300px]">
      <div>
        <h2 className="text-blue-700 text-2xl pl-2 font-bold">CONTACT</h2>
        <h3 className="text-neutral-900 text-xl pl-2 font-bold mt-5">
          Feel free to contact me! 👇
        </h3>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        {contactItems.map((item, index) => (
          <div
            className="flex  md:w-[400px]  pl-5 md:justify-center mt-10 items-center"
            key={index}
          >
            <div className="p-5 bg-gray-200 rounded-full text-center">
              {item.icon}
            </div>
            <div className="pl-5">
              <div className="font-bold">{item.title}</div>
              <div className="text-center">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
