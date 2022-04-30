import React from "react";
import { BsPlus } from "react-icons/bs";
import Blog from "./Blog/Blog";
const Blogs = () => {
  return (
    <section className="blogs p-0 md:p-10">
      <div className="container">
        <div className="title my-6 flex-wrap flex justify-between items-center">
          <div>
            <span>read more articles and make your knowledge wide</span>
            <h2 className="text-2xl font-semibold">Read Articles</h2>
          </div>
          <button className="flex gap-1 p-3 items-center bg-sky-500 rounded active:scale-95 transition-all text-white">
            {" "}
            <BsPlus className="text-white text-2xl" /> Add Blogs
          </button>
        </div>
        <div className="blogs-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-5 md:p-10 rounded bg-white shadow border">
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
