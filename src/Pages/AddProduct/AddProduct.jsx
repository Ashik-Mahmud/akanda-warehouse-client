import React from "react";
import { HiSave } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
export const AddProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="container">
        <div className="title my-6 flex justify-between items-center flex-wrap gap-3">
          <div>
            <span>You can add product from here</span>
            <h2 className="text-2xl font-semibold">Add Product</h2>
          </div>
          <button
            onClick={() => navigate("/my-items")}
            className="flex gap-1 p-3 items-center bg-green-400 rounded active:scale-95 transition-all text-white"
          >
            Your Products
          </button>
        </div>
        <form
          action=""
          className="add-product-wrapper p-10 md:p-20 rounded border shadow bg-white"
        >
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="p-3 border border-gray-300 focus:border-green-400 rounded outline-none text-lg"
              placeholder="Name"
              id="name"
            />
          </div>
          <div className="flex items-center gap-2 my-3">
            <div className="input-group w-full flex flex-col gap-2">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="p-3 border border-gray-300 focus:border-green-400 rounded outline-none text-lg"
                placeholder="Price"
                id="price"
              />
            </div>
            <div className="input-group w-full flex flex-col gap-2">
              <label htmlFor="stock-quantity">Stock Quantity</label>
              <input
                type="text"
                className="p-3 border border-gray-300 focus:border-green-400 rounded outline-none text-lg"
                placeholder="Stock Quantity"
                id="stock-quantity"
              />
            </div>
          </div>
          <div className="input-group my-3">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              placeholder="Short Description"
              rows="3"
              className="w-full p-3 rounded border border-gray-300 outline-none focus:border-green-400"
            ></textarea>
          </div>
          <div className="input-group w-full flex flex-col gap-2">
            <label htmlFor="imageUrl">Image URl</label>
            <input
              type="url"
              className="p-3 border border-gray-300 focus:border-green-400 rounded outline-none text-lg"
              placeholder="Image URL"
              id="imageUrl"
            />
          </div>
          <div className="input-group justify-end flex my-2">
            <button className="bg-green-400 transition-all active:scale-95 p-4 text-white text-lg rounded my-3 flex gap-2 items-center">
              <HiSave className="text-2xl" /> Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
