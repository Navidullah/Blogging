import React from "react";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 py-6 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-extrabold dark:text-white"
      >
        <span className="bg-[#ffde59] text-3xl cinzel_font font-bold px-4 py-4 text-black rounded-full">
          TP
        </span>{" "}
        <span className="livvic_font font-semibold tracking-wide">
          THE PULSE
        </span>
      </Link>
      <form className="lg:w-[400px]">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={IoMdSearch}
          className="hidden lg:inline"
        />
        <Button className="w-12 h-10 lg:hidden" color="gray" pill>
          <IoMdSearch />
        </Button>
      </form>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone="purpleToBlue" outline>
            Sign in
          </Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Navbar.Link
          active={path === "/"}
          as={"div"}
          className="bg-transparent text-black hover:bg-slate-100"
        >
          <Link to="/" className="text-[18px]">
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/about"}
          as={"div"}
          className="bg-transparent text-black hover:bg-slate-100"
        >
          <Link to="/about" className="text-[18px]">
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === "/projects"}
          as={"div"}
          className="bg-transparent text-black hover:bg-slate-100"
        >
          <Link to="/projects" className="text-[18px]">
            Projects
          </Link>
        </Navbar.Link>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;
