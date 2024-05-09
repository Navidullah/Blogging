import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner } from "flowbite-react";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.email) {
      return setErrorMessage("All fields are required!");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data.message);

      setErrorMessage(data.message);

      /*if (data.success === false) {
        console.log(data.success);
        return;
      }*/
      setLoading(false);
      if (res.ok) {
        navigate("/");
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
            <span className="text-3xl cinzel_font rounded-lg sm:text-5xl font-extrabold bg-[#ffde59] text-black p-4">
              TP
            </span>
            <span className="text-4xl livvic_font font-extrabold  text-black dark:text-white">
              THE PULSE
            </span>
          </Link>
          <p className="text-slate-700 mt-3 mb-3 text-2xl sm:max-w-lg">
            This is the demo project. You can sign in with your email, password
            or google account please.
          </p>
        </div>
        <div className="sm:flex-1">
          <div>
            <h1 className="text-4xl  mb-5 text-[#FF6452]">Sign in</h1>
          </div>

          <div className=" rightside sm:max-w-md">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                  "Sign in"
                )}
              </button>
            </form>
            <div className="mt-1">
              <span>Dont have an account? </span>
              <Link to="/signup" className="text-blue-700">
                Sign up
              </Link>{" "}
              here
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

export default SignIn;
