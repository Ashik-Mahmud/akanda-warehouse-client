import React from "react";
import CountUp from "react-countup";
const Statistic = () => {
  return (
    <div className="p-20">
      <div className="container">
        <div className="statistic flex flex-wrap gap-3 items-center justify-between">
          <div className="text-center">
            <h2 className="num text-8xl text-gray-200 font-bold">
              <CountUp end={120} />
              pcs
            </h2>
            <span className="text-gray-500 font-medium uppercase -mt-6 block tracking-wide">
              Until Now
            </span>
            <h3 className="text-2xl uppercase font-semibold text-gray-600">
              Total Products
            </h3>
          </div>
          <div className="text-center">
            <h2 className="num text-8xl text-gray-200 font-bold">
              $<CountUp end={34} />K
            </h2>
            <span className="text-gray-500 font-medium uppercase -mt-6 block tracking-wide">
              Until Now
            </span>
            <h3 className="text-2xl uppercase font-semibold text-gray-600">
              Total Money
            </h3>
          </div>
          <div className="text-center">
            <h2 className="num text-8xl text-gray-200 font-bold">
              <CountUp end={345} />
              pcs
            </h2>
            <span className="text-gray-500 font-medium uppercase -mt-6 block tracking-wide">
              Until Now
            </span>
            <h3 className="text-2xl uppercase font-semibold text-gray-600">
              Total Stocks
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
