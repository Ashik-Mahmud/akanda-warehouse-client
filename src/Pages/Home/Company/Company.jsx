import React from "react";
import { Fade } from "react-reveal";

const Company = () => {
  return (
    <div className="company py-10">
      <div className="container">
        <h3 className="text-center my-5 text-lg">Our Partners</h3>
        <Fade bottom distance="60px">
          <div className="company-content grid sm:grid-cols-5 md:grid-cols-7 justify-center gap-3 py-4">
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-04-1.png"
                alt=""
              />
            </div>
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-07.png"
                alt=""
              />
            </div>
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-01.png"
                alt=""
              />
            </div>
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-03.png"
                alt=""
              />
            </div>
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-02.png"
                alt=""
              />
            </div>
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-08.png"
                alt=""
              />
            </div>
            <div className="partner">
              <img
                width={120}
                src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-05.png"
                alt=""
              />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Company;
