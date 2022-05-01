import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";
const CallToAction = () => {
  const [email, setEmail] = useState("");
  /* handle cta form */
  const handleCallTOAction = (event) => {
    event.preventDefault();
    if (!email) return toast.error(`Email field is required.`);
    Swal.fire(
      "Thanks for your subscribing!",
      "We sent you updated news about my warehouse and we make sure you don't give you spam",
      "success"
    );
  };

  return (
    <div className="cta py-20 md:p-32 my-10 text-center bg-gray-50">
      <div className="container">
        <Fade bottom distance="40px">
          <div className="content">
            <h3 className="text-4xl">Get Update with Us</h3>
            <small>We don't send you spam we ensure you.</small>
            <form
              onSubmit={handleCallTOAction}
              action=""
              className="w-full md:w-2/4 bg-white mx-auto my-10 flex items-stretch p-3 shadow-sm"
            >
              <input
                type="email"
                className="w-full outline-none p-5 text-lg"
                placeholder="Enter your email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <button className="bg-sky-500 px-8 flex items-center gap-2 text-lg text-white">
                Send <FiSend />
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CallToAction;
