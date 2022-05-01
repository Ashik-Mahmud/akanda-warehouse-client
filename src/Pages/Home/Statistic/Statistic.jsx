import React from "react";
import CountUp from "react-countup";
import useProducts from "../../../Hooks/useProducts";
const Statistic = () => {
  const { products } = useProducts();

  const totalMoney = products.reduce(
    (acc, product) => Number(product.price) * Number(product.stockQty) + acc,
    0
  );
  const totalStock = products.reduce(
    (acc, product) => Number(product.stockQty) + acc,
    0
  );

  return (
    <div className="py-10 md:p-20">
      <div className="container">
        <div className="statistic flex flex-col md:flex-row flex-wrap gap-6 items-center justify-between">
          <div className="text-center">
            <h2 className="num text-7xl md:text-8xl text-gray-200 font-bold">
              <CountUp end={products.length || 0} />
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
            <h2 className="num text-7xl md:text-8xl  text-gray-200 font-bold">
              $<CountUp end={totalMoney || 0} />
            </h2>
            <span className="text-gray-500 font-medium uppercase -mt-6 block tracking-wide">
              Until Now
            </span>
            <h3 className="text-2xl uppercase font-semibold text-gray-600">
              Total Money
            </h3>
          </div>
          <div className="text-center">
            <h2 className="num text-7xl md:text-8xl text-gray-200 font-bold">
              <CountUp end={totalStock || 0} />
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
