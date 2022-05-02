import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({
  title,
  description,
  _id,
  imageUrl,
  author,
  category,
  date,
}) => {
  const navigate = useNavigate();
  return (
    <div className="shadow p-2">
      <div className="image rounded overflow-hidden h-40">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <ul className="meta flex justify-between my-1 p-2">
        <li className="text-sm">{category}</li>
        <li className="text-sm">{date}</li>
      </ul>
      <div className="details px-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 my-1">
          {description.slice(0, 100) + ".."}
        </p>
        <button
          onClick={() => navigate(`/blog-details/${_id}`)}
          className="bg-sky-500 p-2 px-3 scale-90 text-white rounded my-2"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
