import React from "react";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const BlogDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="container">
        <div className="card shadow p-8">
          <div className="card-header pb-4 flex items-center gap-2">
            <BsChevronDoubleLeft
              className="cursor-pointer text-xl"
              onClick={() => navigate(-1)}
            />
            <h2 className="text-2xl">Blog Title Goes here</h2>
          </div>
          <div className="card-body">
            <div className="image h-96 overflow-hidden rounded">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdDVfx8SFEV8icT9J9pkG4V3mc1RuPFOzr02eHuSG2cwO5MaaCQiEvGtnLqqU3rZRyLY&usqp=CAU"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="details">
              <ul className="meta flex justify-between items-center my-4">
                <li>
                  Author - <span className="text-sky-500">Ashik Mahmud</span>
                </li>
                <li>
                  Date - <span className="text-sky-500">23 Jan, 2022</span>
                </li>
                <li>
                  Category - <span className="text-sky-500">Tech</span>
                </li>
              </ul>
              <p className="leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                labore eum, iusto, rerum praesentium maxime amet natus
                consequatur adipisci veniam optio officiis architecto tempora
                repudiandae aut. Repellat veniam id repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
