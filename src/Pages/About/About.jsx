import React from "react";
import { BsArrowRight } from "react-icons/bs";
import useTitle from "../../Hooks/useTitle";
const About = () => {
  useTitle("About us");
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <img
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://camo.githubusercontent.com/2336294ddd82dbd16bdeb0b3768c51898fbdf42e7f438201d188d87a79a6f5dd/68747470733a2f2f692e6962622e636f2f574739326b74342f4368726973746d61732d4761726c616e64732d616e642d4d6973746c65746f652d547769747465722d4865616465722e706e67"
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full overflow-hidden inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  src="https://lh3.googleusercontent.com/a-/AOh14GiftqTeBj_e_BLu-PlS7CsRhpi6HD9Ma7h7pVER=s96-c"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Ashik Mahmud
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Hey guys! Thanks for having here. I am full stack developer at{" "}
                  <strong>Unknown Company</strong> I already had biggest
                  responsible of this company.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Meggings portland fingerstache lyft, post-ironic fixie man bun
                banh mi umami everyday carry hexagon locavore direct trade art
                party. Locavore small batch listicle gastropub farm-to-table
                lumbersexual salvia messenger bag. Coloring book flannel
                truffaut craft beer drinking vinegar sartorial, disrupt fashion
                axe normcore meh butcher. Portland 90's scenester vexillologist
                forage post-ironic asymmetrical, chartreuse disrupt butcher
                paleo intelligentsia pabst before they sold out four loko. 3
                wolf moon brooklyn.
              </p>
              <a
                className="text-indigo-500 inline-flex items-center gap-2"
                href="/"
              >
                Learn More <BsArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
