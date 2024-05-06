import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password || !formData.email) {
      return setErrorMessage("All fields are required!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setErrorMessage(data.message);

      /*if (data.success === false) {
        console.log(data.success);
        return;
      }*/
      setLoading(false);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (err) {
      setErrorMessage(err.message);
      setLoading(false);
    }
  };
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

          <div className=" rightside sm:max-w-md">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label>Your username</label>
                <input
                  type="text"
                  placeholder="Username"
                  id="username"
                  className="bg-slate-100 rounded-md  font-normal"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex flex-col">
                <label>Your email</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  id="email"
                  className="bg-slate-100 rounded-md   font-normal"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="flex flex-col">
                <label>Your password</label>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  className="bg-slate-100 rounded-md   font-normal"
                  onChange={handleChange}
                ></input>
              </div>
              <button
                type="submit"
                className="gradient p-3 rounded-md text-white hover:opacity-75"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="px-3 text-black"> Loading...</span>
                  </>
                ) : (
                  "Sign up"
                )}
              </button>
            </form>
            <div className="mt-1">
              <span>Have Already an Account? </span>
              <Link to="/sign-in" className="text-blue-700">
                Sign in here
              </Link>
            </div>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
