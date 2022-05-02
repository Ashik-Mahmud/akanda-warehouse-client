import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useBlogs from "../../Hooks/useBlogs";
import useTitle from "../../Hooks/useTitle";
const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogs, loading } = useBlogs();
  const { BlogId } = useParams();
  const currentBlog = blogs.find((blog) => blog._id === BlogId);
  useTitle(currentBlog?.title || "loading...");

  return (
    <div className="p-10">
      <div className="container">
        <div className="card shadow p-8">
          {loading ? (
            <>
              <div className="card-header pb-4 flex items-center gap-2">
                <BsChevronDoubleLeft
                  className="cursor-pointer text-xl"
                  onClick={() => navigate(-1)}
                />
                <h2 className="text-2xl">{currentBlog?.title}</h2>
              </div>
              <div className="card-body">
                <div className="image h-96 p-5 shadow-sm overflow-hidden rounded">
                  <img
                    src={currentBlog?.imageUrl}
                    alt={currentBlog?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="details">
                  <ul className="meta flex justify-between items-center my-4">
                    <li>
                      Author -{" "}
                      <span className="text-sky-500">
                        {currentBlog?.author?.name}
                      </span>
                    </li>
                    <li>
                      Date -{" "}
                      <span className="text-sky-500">{currentBlog?.date}</span>
                    </li>
                    <li>
                      Category -{" "}
                      <span className="text-sky-500">
                        {currentBlog?.category}
                      </span>
                    </li>
                  </ul>
                  <p className="leading-7 text-gray-500">
                    {currentBlog?.description}{" "}
                  </p>
                </div>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
