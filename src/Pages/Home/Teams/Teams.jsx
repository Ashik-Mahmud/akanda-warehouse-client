import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Teams = () => {
  return (
    <div className="teams py-10">
      <div className="container">
        <div className="team-title text-center my-14">
          <span className="uppercase text-sm text-gray-500">Our Team</span>
          <h1 className="text-5xl uppercase font-semibold mb-6 text-gray-600 mt-2">
            Management
          </h1>
        </div>
        <div className="team-content flex justify-between items-center gap-8">
          <div className="team-member shadow-md rounded p-5">
            <div className="image w-96 h-80 overflow-hidden rounded">
              <img
                className="max-w-full"
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
            <div className="image w-96 h-80 overflow-hidden rounded">
              <img
                className="max-w-full"
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
            <div className="image w-96 h-80 overflow-hidden rounded">
              <img
                className="max-w-full"
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
