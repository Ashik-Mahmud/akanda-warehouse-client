import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const BlogsManagement = () => {
  const location = useLocation();

  return (
    <div className="p-10">
      <div className="container mx-auto">
        <h2 className="text-2xl my-5">Management blogs</h2>
        <ul className="flex flex-row gap-3">
          <li
            className={`p-2 ${
              location.pathname.includes("add-blog") ||
              location.pathname === "/management-blogs"
                ? "bg-sky-400 text-white px-2"
                : "bg-gray-100"
            }`}
          >
            <Link to="/management-blogs/add-blog">Add Blogs</Link>
          </li>
          <li
            className={`p-2 ${
              location.pathname.includes("manage-blog")
                ? "bg-sky-400 text-white px-2"
                : "bg-gray-100"
            }`}
          >
            <Link to="/management-blogs/manage-blog">Management Blogs</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default BlogsManagement;
