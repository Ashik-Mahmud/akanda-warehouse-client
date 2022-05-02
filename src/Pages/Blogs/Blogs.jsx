import React from "react";
import { BsPlus } from "react-icons/bs";
import { Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { auth } from "../../Firebase/Firebase.config";
import useBlogs from "../../Hooks/useBlogs";
import Blog from "./Blog/Blog";
const Blogs = () => {
  const navigate = useNavigate();
  const { blogs, loading } = useBlogs();
  console.log(blogs);
  return (
    <section className="blogs p-0 md:p-10">
      <div className="container">
        <Fade bottom distance="30px">
          <div className="title my-6 flex-wrap flex justify-between items-center">
            <div>
              <span>read more articles and make your knowledge wide</span>
              <h2 className="text-2xl font-semibold">Read Articles</h2>
            </div>
            {auth?.currentUser && (
              <button
                onClick={() => navigate(`/management-blogs`)}
                className="flex gap-1 p-3 items-center bg-sky-500 rounded active:scale-95 transition-all text-white"
              >
                {" "}
                <BsPlus className="text-white text-2xl" /> Add Blogs
              </button>
            )}
          </div>
        </Fade>
        <Fade bottom distance="40px">
          {loading ? (
            blogs.length > 0 ? (
              <div className="blogs-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 p-5 md:p-10 rounded bg-white shadow border">
                {blogs.map((blog) => (
                  <Blog key={blog._id} {...blog} />
                ))}
              </div>
            ) : (
              "No blog found yet."
            )
          ) : (
            <Loader />
          )}
        </Fade>
      </div>
    </section>
  );
};

export default Blogs;
