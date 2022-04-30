import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="line flex justify-center items-center gap-1 my-3">
        <p className="w-1/2 bg-green-400 h-[2px]"></p>
        <span className="text-green-400 font-semibold">Or</span>
        <p className="w-1/2 bg-green-400 h-[2px]"></p>
      </div>
      <div className="google flex p-2 border rounded-full my-4 items-center gap-16 cursor-pointer">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png"
          alt="google"
          width={30}
        />
        <span>Continue with Google</span>
      </div>
    </div>
  );
};

export default SocialLogin;
