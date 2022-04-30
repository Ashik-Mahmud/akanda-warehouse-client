import React from "react";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <section className="signUp grid place-items-center min-h-screen">
      <div className="signUp-wrapper w-3/5 flex items-stretch  border shadow-sm rounded">
        <div className="reg-image grid place-items-center bg-white w-1/2 border-r border-r-gray-100">
          <img
            src="https://www.kashiganga.com/images/man.jpg"
            alt="reg"
            width={500}
          />
        </div>
        <form action="" className="form-wrapper w-1/2 p-10 px-14">
          <h3 className="text-2xl my-4 font-poppins font-medium">
            Sign Up into <span className="text-green-400">Account</span>
          </h3>
          <div className="input-group mb-2">
            <label htmlFor="name" className="mb-2 block">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              className="w-full p-3 outline-none border rounded-sm my-1"
            />
          </div>
          <div className="input-group mb-2">
            <label htmlFor="email" className="mb-2 block">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              className="w-full p-3 outline-none border rounded-sm my-1"
            />
          </div>
          <div className="input-group mb-2">
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              className="w-full p-3 outline-none border rounded-sm my-1"
            />
          </div>
          <div className="input-group mb-2">
            <label htmlFor="confirm-password" className="mb-2 block">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm-password"
              id="confirm-password"
              className="w-full p-3 outline-none border rounded-sm my-1"
            />
          </div>
          <div className="input-group">
            <button className="w-full p-4 rounded bg-green-400 text-white my-3">
              Sign Up
            </button>
          </div>
          <p>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer text-green-400"
            >
              Sign In
            </span>
          </p>
          <SocialLogin />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
