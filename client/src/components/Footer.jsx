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
    <div className="container  border border-gray-100 p-6">
      <div className="flex items-center">
        <div className="flex-1 ">
          <img
            src={logo}
            alt="logo"
            width="300"
            height="300"
            className="rounded-full"
          ></img>
        </div>
        <div className=" flex-1 flex justify-between">
          <div className="flex flex-col  gap-2">
            <span className="livvic_font">RESOURCES</span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Flowbite
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Tailwind css
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Bootstrap
            </span>
          </div>
          <div className="flex flex-col  gap-2">
            <span className="livvic_font">FOLLOW US</span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Facebook
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Github
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Youtube
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="livvic_font">LEGAL</span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Privacy Policies
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              Terms and Conditions
            </span>
            <span className="font-normal text-slate-500 hover:cursor-pointer">
              About us
            </span>
          </div>
        </div>
      </div>
      <div className="py-10">
        <hr />
      </div>
      <div className="flex justify-between mt-4">
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
            <FaFacebook />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaTwitter />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaGoogle />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaInstagram />
          </div>
          <div className="px-5 text-2xl hover:cursor-pointer">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterC;
