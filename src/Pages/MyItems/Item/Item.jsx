import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const Item = ({ imageUrl, name, stockQty, price }) => {
  return (
    <div className="shadow-sm rounded-md p-5 border mb-10 bg-white">
      <div className="image -mt-16 bg-white w-24 h-24 p-2 relative left-1/2 -translate-x-1/2 overflow-hidden border-gray-100 border rounded-full">
        <img src={imageUrl} alt={name} width={120} className="w-full h-full" />
      </div>
      <div className="details text-center">
        <span className="uppercase text-sm block mt-2 text-gray-400">
          Price - ${price}
        </span>
        <h3 className="text-md mb-1">{name.slice(0, 20)}</h3>
        <span className="uppercase text-sm mb-2 block text-gray-400">
          Quantity - {stockQty}pcs
        </span>

        <div className="flex gap-2 justify-center">
          <button className="w-8 h-8 grid place-items-center bg-sky-500 rounded text-white">
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
