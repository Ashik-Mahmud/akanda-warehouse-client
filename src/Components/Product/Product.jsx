import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({
  imageUrl,
  stockQty,
  price,
  name,
  description,
  supplierName,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="p-2 shadow rounded relative">
      <div className="badge absolute top-1 right-1 bg-teal-500 text-sm rounded-full text-white px-2 py-1 ">
        New
      </div>
      <div className="image w-full h-60 overflow-hidden border border-gray-50 rounded">
        <img src={imageUrl} alt="product" className="h-full w-full" />
      </div>
      <div className="details p-3">
        <div className="flex justify-between items-center my-1">
          <span className="text-sky-500">{price}$</span>
          <span className="bg-gray-100 p-2 text-sm">{stockQty}pcs</span>
        </div>
        <div>
          <h4 className="text-lg">{name.slice(0, 50) + "..."}</h4>
          <p className="text-sm text-gray-400">
            {description.slice(0, 80) + "..."}
          </p>
        </div>
        <div className="flex items-start gap-2 justify-between my-3 flex-wrap flex-col">
          <button
            onClick={() => navigate(`/inventory/${_id}`)}
            className="bg-sky-500 px-3 py-2 flex-wrap rounded text-white"
          >
            Manage
          </button>
          <p className="text-sm te{xt-gray-400 uppercase">
            Supplier- {supplierName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
