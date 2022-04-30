import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginContainer className="grid place-items-center min-h-[70vh]">
      <div className="login-wrapper  rounded flex flex-col md:flex-row w-full py-5 md:py-0  md:w-full lg:w-2/4 items-stretch gap-10 shadow-sm border">
        <div className="image bg-white grid place-items-center order-2 md:order-1">
          <img
            width={500}
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            alt="login"
          />
        </div>
        <form
          action=""
          className="form-wrapper w-full md:w-2/5 px-4  py-10 order-1 md:order-2 "
        >
          <h3 className="text-3xl mb-3 font-medium font-poppins">
            Login into <span className="text-green-400">Account</span>
          </h3>
          <div className="input-group mb-3">
            <label htmlFor="email" className="my-2 block">
              Email
            </label>
            <input
              type="email"
              className="w-full border p-3 outline-none rounded text-lg"
              placeholder="Email"
              id="email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="my-2 block">
              Password
            </label>
            <input
              type="password"
              className="w-full border p-3 outline-none rounded text-lg"
              name="password"
              placeholder="Password"
              id="password"
            />
            <p className="my-2">
              Forget password?{" "}
              <span className="cursor-pointer  text-green-400">Reset</span>
            </p>
          </div>
          <div className="input-group">
            <button className="bg-green-400 w-full rounded text-lg text-white px-5 py-3">
              Sign In
            </button>
          </div>
          <p className="mt-3">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className="cursor-pointer text-green-400"
            >
              Create
            </span>
          </p>
          <SocialLogin />
        </form>
      </div>
    </LoginContainer>
  );
};
const LoginContainer = styled.section`
  position: relative;
`;
export default Login;
