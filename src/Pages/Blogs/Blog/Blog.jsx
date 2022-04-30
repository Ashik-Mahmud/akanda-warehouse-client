import React from "react";

const Blog = () => {
  return (
    <div className="shadow p-2">
      <div className="image rounded overflow-hidden h-40">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdDVfx8SFEV8icT9J9pkG4V3mc1RuPFOzr02eHuSG2cwO5MaaCQiEvGtnLqqU3rZRyLY&usqp=CAU"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <ul className="meta flex justify-between my-1 p-2">
        <li className="text-sm">Ashik Mahmud</li>
        <li className="text-sm">Tech</li>
        <li className="text-sm">21 Jan, 2022</li>
      </ul>
      <div className="details px-2">
        <h3 className="text-lg font-semibold">Title Goes here</h3>
        <p className="text-sm text-gray-500 my-1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aperiam,
        </p>
        <button className="bg-green-400 p-2 px-3 scale-90 text-white rounded my-2">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
