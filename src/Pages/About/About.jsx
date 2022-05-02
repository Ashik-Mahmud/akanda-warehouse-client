import React from "react";
import useTitle from "../../Hooks/useTitle";

const About = () => {
  useTitle("About us");
  return (
    <div>
      <div className="container">
        <div className="p-10">
          <h1 className="text-3xl">About me</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
