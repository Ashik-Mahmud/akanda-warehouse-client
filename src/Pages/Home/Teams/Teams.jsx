import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Teams = () => {
  return (
    <div className="teams py-10">
      <div className="container">
        <div className="title">
          <span className="text-lg uppercase text-gray-400">Our Team</span>
          <h2 className="text-3xl uppercase text-gray-700 font-semibold">
            Management
          </h2>
        </div>
        <div className="team-content mt-7 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  justify-between items-center gap-8">
          <div className="team-member shadow-md rounded p-5">
            <div className="image h-80 overflow-hidden rounded">
              <img
                className="w-full h-full object-cover"
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2020/03/team-01.jpg"
                alt="team1"
              />
            </div>
            <div className="details text-center mt-3 bg-slate-100 py-4 rounded">
              <span className="text-gray-500 my-2">Supplier</span>
              <h3 className="text-2xl">Jhone Doe</h3>
              <div className="socials flex justify-center gap-5 my-3 items-center">
                <a href="/">
                  <BsFacebook />
                </a>
                <a href="/">
                  <BsTwitter />
                </a>
                <a href="/">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="team-member shadow-md rounded p-5">
            <div className="image h-80 overflow-hidden rounded">
              <img
                className="w-full h-full object-cover"
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2020/03/team-01.jpg"
                alt="team1"
              />
            </div>
            <div className="details text-center mt-3 bg-slate-100 py-4 rounded">
              <span className="text-gray-500 my-2">Supplier</span>
              <h3 className="text-2xl">Jhone Doe</h3>
              <div className="socials flex justify-center gap-5 my-3 items-center">
                <a href="/">
                  <BsFacebook />
                </a>
                <a href="/">
                  <BsTwitter />
                </a>
                <a href="/">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>

          <div className="team-member shadow-md rounded p-5">
            <div className="image  h-80 overflow-hidden rounded">
              <img
                className="w-full h-full object-cover"
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2020/03/team-01.jpg"
                alt="team1"
              />
            </div>
            <div className="details text-center mt-3 bg-slate-100 py-4 rounded">
              <span className="text-gray-500 my-2">Supplier</span>
              <h3 className="text-2xl">Jhone Doe</h3>
              <div className="socials flex justify-center gap-5 my-3 items-center">
                <a href="/">
                  <BsFacebook />
                </a>
                <a href="/">
                  <BsTwitter />
                </a>
                <a href="/">
                  <BsInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
