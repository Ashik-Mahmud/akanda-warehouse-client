import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="p-2 shadow rounded relative">
      <div className="badge absolute top-1 right-1 bg-teal-500 text-sm rounded-full text-white px-2 py-1 ">
        New
      </div>
      <div className="image w-full h-60 overflow-hidden border border-gray-50 rounded">
        <img
          src="https://static-01.daraz.com.bd/p/9eb4281b7d9f084cec2d8e86fbc16259.jpg"
          alt="product"
          className="h-full w-full"
        />
      </div>
      <div className="details p-3">
        <div className="flex justify-between items-center my-1">
          <span className="text-green-400">4345$</span>
          <span className="bg-gray-100 p-2 text-sm">43pcs</span>
        </div>
        <div>
          <h4 className="text-lg">Laptop for macOS</h4>
          <p className="text-sm text-gray-400">
            this is simple short description....
          </p>
        </div>
        <div className="flex items-start gap-2 justify-between my-3 flex-wrap flex-col">
          <button
            onClick={() => navigate(`/inventory/4`)}
            className="bg-green-400 px-3 py-2 flex-wrap rounded text-white"
          >
            Manage
          </button>
          <p className="text-sm text-gray-400 uppercase">
            Supplier- Ashik Mahmud
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
