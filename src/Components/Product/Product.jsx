import React from "react";

const Product = () => {
  return (
    <div className="p-2 shadow rounded">
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
        <div className="flex items-center justify-between my-3">
          <button className="bg-green-400 px-3 py-2 rounded text-white">
            Get
          </button>
          <p className="text-sm text-gray-400 uppercase">Supp- Ashik Mahmud</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
