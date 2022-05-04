import React, { useState } from "react";
import toast from "react-hot-toast";
import { Fade } from "react-reveal";
import Swal from "sweetalert2";

const Contact = () => {
  /* handle feedback form */
  const [feedbackInput, setFeedbackInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFeedbackForm = async (event) => {
    event.preventDefault();
    if (!feedbackInput.name) return toast.error("Name field is required.");
    if (!feedbackInput.email) return toast.error("Email field is required.");
    if (!feedbackInput.message)
      return toast.error("Message field is required.");

    Swal.fire(
      "Thanks for your Feedback!",
      "We consider your feedback if it's related and it means logically for us.",
      "success"
    );
    setFeedbackInput({ name: "", email: "", message: "" });
  };

  return (
    <section className="text-gray-600  py-24 body-font relative bg-white">
      <div className="container mx-auto my-5 text-black">
        <Fade bottom distance="50px">
          <div className="title py-6">
            <span className="text-lg uppercase text-gray-500">
              you can trace me if you want.
            </span>
            <h2 className="text-3xl uppercase text-slate-700 font-semibold">
              Track us
            </h2>
          </div>
        </Fade>
      </div>
      <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115572.29372033333!2d89.28594390950842!3d25.14805577693178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce24469643ea3%3A0xb688d28b2f76292a!2sGobindaganj%20Upazila!5e0!3m2!1sen!2sbd!4v1651700166973!5m2!1sen!2sbd"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Bagda Bazar, Gobindagonj Upazila, Gaibanda, Rangpur, Dhaka,
                Bangladesh.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="/" className="text-sky-500 leading-relaxed">
                dev.ashikmahmud@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleFeedbackForm}
          className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Leave your Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) =>
                setFeedbackInput({ ...feedbackInput, name: event.target.value })
              }
              value={feedbackInput.name}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(event) =>
                setFeedbackInput({
                  ...feedbackInput,
                  email: event.target.value,
                })
              }
              value={feedbackInput.email}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(event) =>
                setFeedbackInput({
                  ...feedbackInput,
                  message: event.target.value,
                })
              }
              value={feedbackInput.message}
            ></textarea>
          </div>
          <button className="text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">
            Send Feedback
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
