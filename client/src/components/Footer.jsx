import React from "react";
import logo from "../image/logo.png";
import { Footer } from "flowbite-react";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const FooterC = () => {
  return (
    <div className="w-full bg-[#303846]  p-6">
      <div className=" flex flex-col sm:flex-row">
        <div className="flex-1 py-4 flex justify-center sm:inline">
          <img
            src={logo}
            alt="logo"
            width="300"
            height="300"
            className="rounded-full w-32 h-32 sm:w-[300px] sm:h-[300px]"
          ></img>
        </div>
        <div className=" flex-1 flex justify-between gap-4 sm:gap-0">
          <div className="flex flex-col  gap-2">
            <span className="livvic_font  text-white">RESOURCES</span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Flowbite
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Tailwind css
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Bootstrap
            </span>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="livvic_font text-white">FOLLOW US</span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Facebook
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Github
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Youtube
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="livvic_font text-white">LEGAL</span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Privacy Policies
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              Terms & Conditions
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer hover:text-white">
              About us
            </span>
          </div>
        </div>
      </div>
      <div className="py-10">
        <hr />
      </div>
      <div className="flex flex-col gap-4 items-center sm:flex-row justify-between mt-4">
        <div>
          <Footer.Copyright
            href="#"
            by="The Pulse. All Rights Reserved."
            year={new Date().getFullYear()}
            className="text-xl"
          />
        </div>
        <div className="flex">
          <div className="px-5 text-2xl  hover:cursor-pointer">
            <FaFacebook color="white" />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaTwitter color="white" />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaGoogle color="white" />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaInstagram color="white" />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaGithub color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterC;
