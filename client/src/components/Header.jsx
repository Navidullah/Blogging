import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice.js";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const handleSignout = async () => {};
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
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentUser.profilePicture}
                rounded
                width="16"
                height="16"
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">@{currentUser.username}</span>
              <span className="block text-sm font-medium truncate">
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign in
            </Button>
          </Link>
        )}
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
