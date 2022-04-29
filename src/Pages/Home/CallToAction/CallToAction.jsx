import React from "react";
import { FiSend } from "react-icons/fi";
const CallToAction = () => {
  return (
    <div className="cta p-32 my-10 text-center bg-gray-50">
      <div className="container">
        <div className="content">
          <h3 className="text-4xl">Get Update with Us</h3>
          <small>We don't send you spam we ensure you.</small>
          <form
            action=""
            className="w-2/4 bg-white mx-auto my-10 flex items-stretch p-3 shadow-sm"
          >
            <input
              type="email"
              className="w-full outline-none p-5 text-lg"
              placeholder="Enter your email"
            />
            <button className="bg-green-400 px-8 flex items-center gap-2 text-lg text-white">
              Send <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
