import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" container max-sm:px-5">
      <div className="flex flex-col mt-[150px] min-h-screen  sm:flex-row max-sm:mt-4">
        <div className="leftside sm:flex-1">
          <Link to="/" className="flex items-center h_font">
            <span className="text-3xl sm:text-5xl font-extrabold gradient text-white p-3 rounded-md ">
              HEADLINES{" "}
            </span>
            <span className="text-4xl font-extrabold  text-black dark:text-white">
              {" "}
              HUB
            </span>
          </Link>
          <p className="text-slate-700 mt-3 mb-3 text-2xl sm:max-w-lg">
            This is the demo project. You can sign in with your email, password
            or google account please.
          </p>
        </div>
        <div className="sm:flex-1">
          <div>
            <h1 className="text-4xl  mb-5 text-[#FF6452]">Sign up</h1>
          </div>

          <div className="rightside sm:max-w-md">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label>Your username</label>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="bg-slate-100 rounded-md text-slate-100 font-normal"
                ></input>
              </div>
              <div className="flex flex-col">
                <label>Your email</label>
                <input
                  type="text"
                  placeholder="name@company.com"
                  id="email"
                  className="bg-slate-100 rounded-md  text-slate-100 font-normal"
                ></input>
              </div>
              <div className="flex flex-col">
                <label>Your password</label>
                <input
                  type="text"
                  placeholder="Password"
                  id="password"
                  className="bg-slate-100 rounded-md  text-slate-100 font-normal"
                ></input>
              </div>
              <button
                type="submit"
                className="gradient p-3 rounded-md text-white"
              >
                Sign up
              </button>
            </form>
            <div className="mt-1">
              <span>Have Already an Account? </span>
              <Link to="/sign-in" className="text-blue-700">
                Sign in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
