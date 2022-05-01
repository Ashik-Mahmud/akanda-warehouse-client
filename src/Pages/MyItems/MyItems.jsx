import React from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { auth } from "../../Firebase/Firebase.config";
import useCurrentUserProduct from "../../Hooks/useCurrentUserProduct";
import Item from "./Item/Item";
const MyItems = () => {
  const navigate = useNavigate();
  const { currentUserProduct, loading } = useCurrentUserProduct();
  return (
    <section className="my-items">
      <div className="container">
        <div className="title my-5 p-5 flex flex-col md:flex-row justify-between items-center bg-gray-100">
          <div>
            <h2 className="text-3xl font-semibold">
              <span className="text-sky-500">
                {auth?.currentUser?.displayName}
              </span>{" "}
              Items
            </h2>
            <p>We should get of mine added products.</p>
          </div>
          <div className="bg-white p-2 flex items-stretch mt-2">
            <input
              className="p-3 outline-none text-lg"
              type="search"
              placeholder="Search"
              id="search"
            />
            <button className="bg-sky-500 px-5 text-white">
              <BsSearch />
            </button>
          </div>
        </div>
        {loading ? (
          currentUserProduct.length > 0 ? (
            <div className="items-container grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7 py-10">
              {currentUserProduct.map((product) => (
                <Item key={product._id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl my-2">No Items found yet.</h3>
              <button
                onClick={() => navigate(`/add-product`)}
                className="bg-sky-500 p-3 text-white rounded my-3"
              >
                Add New Item
              </button>
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default MyItems;
