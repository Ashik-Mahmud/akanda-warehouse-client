import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Item = () => {
  return (
    <div className="shadow-sm rounded-md p-5 border mb-10 bg-white">
      <div className="image -mt-16 bg-white w-24 h-24 p-2 relative left-1/2 -translate-x-1/2 overflow-hidden border-2 rounded-full">
        <img
          src="https://static-01.daraz.com.bd/p/9eb4281b7d9f084cec2d8e86fbc16259.jpg"
          alt=""
          width={120}
          className="w-full h-full"
        />
      </div>
      <div className="details text-center">
        <span className="text-sm uppercase text-gray-400 block mt-2">
          Ashik Mahmud
        </span>
        <h3 className="text-lg mb-1">Laptop name</h3>
        <div className="flex justify-between gap-3 my-2">
          <span className="uppercase text-sm text-gray-400"> $34</span>
          <span className="uppercase text-sm text-gray-400"> 34pcs</span>
        </div>
        <div className="flex gap-2 justify-center">
          <button className="w-8 h-8 grid place-items-center bg-green-400 rounded text-white">
            <FaEdit />
          </button>
          <button className="w-8 h-8 grid place-items-center bg-red-400 text-white rounded">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
