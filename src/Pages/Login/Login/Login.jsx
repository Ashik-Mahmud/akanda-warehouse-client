import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  /* if user has so it's redirect on home or desire page */
  const { isAuth } = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [isAuth, navigate, from]);

  /* Handle Login Form */
  const [isReset, setIsReset] = useState(false);
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handleLoginForm = async (event) => {
    event.preventDefault();
    /* validation  */
    if (!loginInput.email) return toast.error(`Email field is required.`);
    if (!isReset) {
      if (!loginInput.password)
        return toast.error(`Password field is required.`);
    }

    await signInWithEmailAndPassword(
      auth,
      loginInput.email,
      loginInput.password
    )
      .then((res) => {
        toast.success(`Sign In successfully done.`);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  /*  handle reset password  */
  const handleResetPassword = async () => {
    if (!loginInput.email) return toast.error(`You should put email address`);
    await sendPasswordResetEmail(auth, loginInput.email)
      .then((res) => {
        toast.success(
          `We sent you email with password reset link on ${loginInput.email}`
        );
      })
      .catch((err) => {
        toast.error(err.message.split(":")[1]);
      });
  };

  return (
    <LoginContainer className="grid place-items-center min-h-[70vh]">
      <div className="login-wrapper  rounded flex flex-col md:flex-row w-full py-5 md:py-0  md:w-full lg:w-2/4 items-stretch gap-10 shadow-sm border">
        <div className="image bg-white grid place-items-center order-2 md:order-1">
          <img
            width={500}
            src={
              isReset
                ? "https://payment.bmdc.org.bd/cis/portal/img/forgot.jpg"
                : "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000"
            }
            alt="login"
          />
        </div>
        <form
          action=""
          onSubmit={handleLoginForm}
          className="form-wrapper w-full md:w-2/5 px-4  py-10 order-1 md:order-2 "
        >
          <h3 className="text-3xl mb-3 font-medium font-poppins">
            {isReset ? (
              <>
                Reset <span className="text-sky-500">Password</span>
              </>
            ) : (
              <>
                Login into <span className="text-sky-500">Account</span>
              </>
            )}
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
              onChange={(event) =>
                setLoginInput({ ...loginInput, email: event.target.value })
              }
            />
          </div>

          <div className="input-group">
            {!isReset && (
              <>
                <label htmlFor="password" className="my-2 block">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border p-3 outline-none rounded text-lg"
                  name="password"
                  placeholder="Password"
                  id="password"
                  onChange={(event) =>
                    setLoginInput({
                      ...loginInput,
                      password: event.target.value,
                    })
                  }
                />
              </>
            )}

            <p className="my-2">
              {isReset ? "Go to home " : "Forget password? "}
              <span
                onClick={() => setIsReset((prev) => !prev)}
                className="cursor-pointer  text-sky-500"
              >
                {isReset ? " Page" : " Reset"}
              </span>
            </p>
          </div>
          <div className="input-group">
            {isReset ? (
              <button
                onClick={handleResetPassword}
                type="button"
                className="bg-sky-500 w-full rounded text-lg text-white px-5 py-3"
              >
                Reset Password
              </button>
            ) : (
              <button className="bg-sky-500 w-full rounded text-lg text-white px-5 py-3">
                Sign In
              </button>
            )}
          </div>
          <p className="mt-3">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/sign-up")}
              className="cursor-pointer text-sky-500"
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
