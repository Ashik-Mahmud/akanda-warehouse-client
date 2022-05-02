import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import useFirebase from "../../../Hooks/useFirebase";
const SocialLogin = () => {
  const { socialSignIn, loading } = useFirebase();
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    socialSignIn(provider);
  };

  return (
    <div>
      <div className="line flex justify-center items-center gap-1 my-3">
        <p className="w-1/2 bg-sky-500 h-[2px]"></p>
        <span className="text-sky-500 font-semibold">Or</span>
        <p className="w-1/2 bg-sky-500 h-[2px]"></p>
      </div>
      {!loading ? (
        <div
          onClick={handleGoogleSignIn}
          className="google flex p-2 border rounded-full my-4 items-center gap-16 cursor-pointer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
            alt="google"
            width={30}
          />
          <span>Continue with Google</span>
        </div>
      ) : (
        <div className="text-center flex justify-center">
          <img
            width={50}
            src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
            alt="loader"
          />
        </div>
      )}
    </div>
  );
};

export default SocialLogin;
