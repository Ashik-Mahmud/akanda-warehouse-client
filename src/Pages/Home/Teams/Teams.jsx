import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Fade } from "react-reveal";
const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get(`https://akanda-warehouse-server.herokuapp.com/teams`)
      .then((res) => {
        setTeams(res.data.data);
      });
  }, []);
  return (
    <div className="teams py-10">
      <div className="container">
        <Fade bottom distance="30px">
          <div className="title">
            <span className="text-lg uppercase text-gray-400">Our Team</span>
            <h2 className="text-3xl uppercase text-gray-700 font-semibold">
              Management
            </h2>
          </div>
        </Fade>
        <Fade bottom distance="40px">
          <div className="team-content mt-7 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  justify-between items-center gap-8">
            {teams?.map((team) => (
              <div key={team._id} className="team-member shadow-md rounded p-5">
                <div className="image h-80 overflow-hidden rounded">
                  <img
                    className="w-full h-full object-cover"
                    src={team?.avatar}
                    alt="team1"
                  />
                </div>
                <div className="details text-center mt-3 bg-slate-100 py-4 rounded">
                  <span className="text-gray-500 my-2">
                    {team?.designation}
                  </span>
                  <h3 className="text-2xl">{team?.name}</h3>
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
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Teams;
